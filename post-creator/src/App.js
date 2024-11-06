// App.js
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useParams } from 'react-router-dom';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Register from './components/Register';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                        <Link to={`/posts/${post._id}`}>{post.content_title}</Link>
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

const SinglePost = ({ isAuthenticated }) => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching the post:", error);
            }
        };
        fetchPost();
    }, [postId]);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return post ? (
        <div>
            <h2>{post.content_title}</h2>
            <img src={post.content_image} alt={post.content_title} style={{ width: '300px', height: 'auto' }} />
            <p>{post.content_title}</p>
            <div>
                <span>Tags: {post.tags.map(tag => tag.name).join(', ')}</span>
                <span> | Date: {new Date(post.date).toLocaleDateString()}</span>
                <span> | Likes: {post.no_of_likes}</span>
            </div>
            <p>{post.user_id.username}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Simple auth check

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/" element={
                    <div>
                        <h1>Welcome! Please log in or register.</h1>
                        <PostList />
                        <a href="/login">Go to Login</a>
                    </div>
                } />
                <Route path="/posts/:postId" element={<SinglePost isAuthenticated={isAuthenticated} />} />
            </Routes>
        </Router>
    );
};

export default App;
