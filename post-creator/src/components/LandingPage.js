// components/LandingPage.js
import React from 'react';
import { useAuth } from '../AuthContext'; // Import useAuth
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div>
            <h1>Welcome! Please log in or register.</h1>
            {isAuthenticated ? (
                <div>
                    <Link to="/create-post"><button>Create Post</button></Link>
                    <Link to="/"><button>Show Posts</button></Link>
                </div>
            ) : (
                <div>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
