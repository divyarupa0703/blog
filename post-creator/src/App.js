import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';


// Login Component
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Send login request to the backend
            const response = await axios.post('http://localhost:8000/api/users/login', { 
                email, 
                password 
            });
            localStorage.setItem('token', response.data.token); // Store JWT token in localStorage
            onLogin();  // Notify parent component of successful login
            navigate('/create-post');  // Redirect to create post page
        } catch (error) {
            setError('Login failed. Please check your credentials.'); // Show error message if login fails
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
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
        </form>
    );
};

// Register Component
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/signup', {
                username,
                email,
                password,
            });
            alert(response.data.message);
            // Redirect to login after successful registration
            window.location.href = '/login';
        } catch (error) {
            console.error(error);
            alert(error.response.data.message || "Error registering");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </form>
        </div>
    );
};

// Create Post Component
const CreatePost = () => {
    const [contentTitle, setContentTitle] = useState('');
    const [contentImage, setContentImage] = useState(null);
    const [tags, setTags] = useState(['']);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    // Handle image file change
    const handleImageChange = (e) => {
        setContentImage(e.target.files[0]);
    };

    // Handle changes to tags input
    const handleTagChange = (e, index) => {
        const newTags = [...tags];
        newTags[index] = e.target.value;
        setTags(newTags);
    };

    // Add a new empty tag input field
    const addTag = () => {
        setTags([...tags, '']);
    };

    // Handle post form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            setError('You need to be logged in to create a post.');
            return;  // Stop if the user is not logged in
        }

        const userId = jwtDecode(token).id;  // Decode the JWT to get the user ID
        const formData = new FormData();
        formData.append('content_title', contentTitle);
        formData.append('content_image', contentImage);
        formData.append('user_id', userId);
        tags.forEach(tag => formData.append('tags', tag));

        try {
            // Send request to create a new post
            const response = await axios.post('http://localhost:8000/api/posts', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,  // Include token in the request header
                    'Content-Type': 'multipart/form-data',  // Set the appropriate content type
                }
            });
            alert('Post created successfully!');
            navigate('/'); // Redirect to home or another page after successful post creation
        } catch (error) {
            console.error("Error creating post:", error.response || error);
            setError('Failed to create post. ' + (error.response ? error.response.data.message : '')); // Show error message
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
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
        </form>
    );
};

// Post List Component
const PostList = () => {
    const [posts, setPosts] = useState([]);

    // Fetch posts from the backend on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/posts');
                setPosts(response.data);  // Update posts state with the fetched data
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
                    <img
                        src={`${process.env.PUBLIC_URL}${post.content_image}`}
                        alt={post.content_title}
                        style={{ width: '100px', height: 'auto' }}
                    />
                    
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

// Single Post Component
const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const token = localStorage.getItem("token");
  const userId = token ? jwtDecode(token).id : null;

    // Fetch post and comments on postId change
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                setPost(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the post:", error);
                setError("Failed to load post.");
                setLoading(false);
            }
        };
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${postId}/comments`);
                setComments(response.data.comments || []);  // Set the comments
            } catch (error) {
                console.error("Error fetching comments:", error.response ? error.response.data : error.message);
                setError("Failed to load comments.");
            }
        };
       
         fetchComments();
        fetchPost();
    }, [postId]);

  // Function to handle like button click
  const handleLike = async () => {
      if (!userId) {
          alert("You need to be logged in to like this post.");
          return;
      }

      try {
          const response = await axios.post(
              `http://localhost:8000/api/posts/${postId}/like`,
              { userId },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`,
                  },
              }
          );
          setPost(response.data.post);  // Update the post state
          console.log(response.data.message);
      } catch (error) {
          console.error("Error liking the post:", error.response ? error.response.data : error);
          alert('Failed to like the post.');
      }
  };

  // Handle adding a new comment
  const handleCommentSubmit = async () => {
      if (!userId || !comment) {
          alert("You need to be logged in and provide a comment.");
          return;
      }

      try {
          const response = await axios.post(
              `http://localhost:8000/api/posts/${postId}/comment`,
              { userId, content: comment },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`,
                  },
              }
          );
          // Directly update the comments list without waiting for another API call
          const newComment = response.data.post.comments[response.data.post.comments.length - 1];
          setComments(prevComments => [...prevComments, newComment]);  // Add new comment
          setComment("");  // Reset comment input
          alert("Comment added successfully!");
      } catch (error) {
          console.error("Error adding the comment:", error.response ? error.response.data : error);
          alert("Failed to add the comment.");
      }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    return post ? (
        <div>
            <h2>{post.content_title}</h2>
            <img
                src={`${process.env.PUBLIC_URL}${post.content_image}`}
                alt={post.content_title}
                style={{ width: '300px', height: 'auto' }}
            />
            <p>{post.content_title}</p>
            <p>{new Date(post.date).toLocaleString()}</p>
            <div>Tags: {post.tags.map(tag => tag.name).join(', ')}</div>
            <p>Likes: {post.no_of_likes}</p>
            <button onClick={handleLike}>Like</button>

          {/* Comment Section */}
          <div>
              <h3>Comments:</h3>
              <ul>
                  {comments.length > 0 ? (
                      comments.map((comment) => (
                          <li key={comment._id}>
                              <p> {comment.content}</p>
                          </li>
                      ))
                  ) : (
                      <p>No comments yet.</p>
                  )}
              </ul>
              <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment"
              />
              <button onClick={handleCommentSubmit}>Submit Comment</button>
          </div>
      </div>
  ) : (
      <p>Post not found</p>
  );
};


// Main App Component
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if the user is authenticated on initial load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);  // User is authenticated if token is found
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);  // Update authentication state
    };

    const handleLogout = () => {
        localStorage.removeItem('token');  // Remove token on logout
        setIsAuthenticated(false);  // Update authentication state
    };

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                {!isAuthenticated ? (
                    <>
                        <Link to="/login">Login</Link> | 
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/create-post">Create Post</Link> | 
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/post/:postId" element={<SinglePost />} />
            </Routes>
        </Router>
    );
};

export default App;