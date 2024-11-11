// BlogHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="blog-header">
      <Link to="/blog">Home</Link> |
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
  );
};

export default BlogHeader;
