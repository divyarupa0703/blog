// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

export default Login;
