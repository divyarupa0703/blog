// components/CreatePost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

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

export default CreatePost;
