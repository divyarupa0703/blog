// src/App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import './styles.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userId, setUserId] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (id) => {
    setUserId(id);
  };

  return (
    <div className="app-container">
      <h1>{isLogin ? 'Welcome Back!' : 'Join Our Cultural Community!'}</h1>
      {isLogin ? (
        <Login toggleForm={toggleForm} onLogin={handleLogin} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
      {userId && <CreatePost userId={userId} />} {/* Show CreatePost if user is logged in */}
      <p>
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
        <button onClick={toggleForm} className="toggle-btn">
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </div>
  );
};

export default App;
