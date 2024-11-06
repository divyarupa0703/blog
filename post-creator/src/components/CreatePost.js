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

export default CreatePost;
