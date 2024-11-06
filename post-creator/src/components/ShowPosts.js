// src/components/ShowPosts.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ShowPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts');
        setPosts(response.data); // Assuming the posts are in response.data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = () => {
    history.push('/create-post');
  };

  return (
    <div>
      <h2>Your Posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.content_title}</li> // Adjust according to your post structure
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
      <button onClick={handleCreatePost} className="create-post-btn">Create Post</button>
    </div>
  );
};

export default ShowPosts;
