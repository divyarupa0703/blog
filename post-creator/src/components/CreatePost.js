// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ userId }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Retrieve token from local storage
            const response = await axios.post('http://localhost:8000/api/posts', {
                title,
                content,
                user_id: userId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`, // Pass token in headers
                },
            });
            alert(response.data.message || 'Post created successfully');
            setTitle(''); // Clear fields after submission
            setContent('');
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Error creating post");
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
