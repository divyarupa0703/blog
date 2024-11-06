import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

// Login Component
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', { 
                email, 
                password 
            });
            localStorage.setItem('token', response.data.token);
            onLogin();  // Notify parent component of successful login
            navigate('/create-post');
        } catch (error) {
            console.error("Login failed:", error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Login</button>
        </form>
    );
};

// Register Component
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/users/register', { 
                email, 
                password 
            });
            navigate('/login');
        } catch (error) {
            console.error("Registration failed:", error);
            alert('Registration failed.');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

// Create Post Component
const CreatePost = () => {
    const [contentTitle, setContentTitle] = useState('');
    const [contentImage, setContentImage] = useState(null);
    const [tags, setTags] = useState(['']);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setContentImage(e.target.files[0]);
    };

    const handleTagChange = (e, index) => {
        const newTags = [...tags];
        newTags[index] = e.target.value;
        setTags(newTags);
    };

    const addTag = () => {
        setTags([...tags, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You need to be logged in to create a post.');
            return;
        }

        const userId = jwtDecode(token).id;
        const formData = new FormData();
        formData.append('content_title', contentTitle);
        formData.append('content_image', contentImage);
        formData.append('user_id', userId);
        tags.forEach(tag => formData.append('tags', tag));

        try {
            const response = await axios.post('http://localhost:8000/api/posts', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            });
            alert('Post created successfully!');
            navigate('/'); // Redirect to home or another page
        } catch (error) {
            console.error("Error creating post:", error.response || error);
            alert('Failed to create post. ' + (error.response ? error.response.data.message : ''));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Content Title"
                value={contentTitle}
                onChange={(e) => setContentTitle(e.target.value)}
                required
            />
            <input
                type="file"
                onChange={handleImageChange}
                required
            />
            {tags.map((tag, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="Tag"
                    value={tag}
                    onChange={(e) => handleTagChange(e, index)}
                />
            ))}
            <button type="button" onClick={addTag}>Add Tag</button>
            <button type="submit">Create Post</button>
        </form>
    );
};

// Post List Component
// Post List Component
const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map(post => (
                <div key={post._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>
                        <Link to={`/post/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {post.content_title}
                        </Link>
                    </h3>
                    <img src={post.content_image} alt={post.content_title} style={{ width: '100px', height: 'auto' }} />
                    <p>{post.content_title.slice(0, 100)}...</p>
                    <div>
                        <span>Tags: {post.tags.map(tag => tag.name).join(', ')}</span>
                        <span> | Date: {new Date(post.date).toLocaleDateString()}</span>
                        <span> | Likes: {post.no_of_likes}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SinglePost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                setPost(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the post:", error);
                setError('Failed to load post.');
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return post ? (
        <div>
            <h2>{post.content_title}</h2>
            <img src={post.content_image} alt={post.content_title} style={{ width: '300px', height: 'auto' }} />
            <p>{post.content}</p>
            <div>
                <span>Tags: {post.tags.map(tag => tag.name).join(', ')}</span>
                <span> | Date: {new Date(post.date).toLocaleDateString()}</span>
                <span> | Likes: {post.no_of_likes}</span>
            </div>
            <p>{post.user_id.username}</p>
        </div>
    ) : (
        <p>Post not found.</p>
    );
};




// Main App Component with Routing
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    {isAuthenticated && <Link to="/create-post">Create Post</Link>}
                </nav>

                <Routes>
                    <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:postId" element={<SinglePost />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
