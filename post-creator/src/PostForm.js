// src/PostForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PostForm = () => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('post_id', data.post_id);
        formData.append('user_id', data.user_id);
        formData.append('content_title', data.content_title);
        formData.append('no_of_likes', data.no_of_likes);
        formData.append('comments', JSON.stringify(data.comments)); // Assuming comments can be an array of strings
        formData.append('tags', JSON.stringify(data.tags)); // Assuming tags can be an array of strings

        if (data.content_image[0]) {
            formData.append('image', data.content_image[0]);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/create-post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Post created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please check the console for details.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div>
                <label htmlFor="post_id">Post ID:</label>
                <input type="text" id="post_id" {...register('post_id', { required: true })} />
            </div>
            <div>
                <label htmlFor="user_id">User ID:</label>
                <input type="text" id="user_id" {...register('user_id', { required: true })} />
            </div>
            <div>
                <label htmlFor="content_title">Content Title:</label>
                <input type="text" id="content_title" {...register('content_title', { required: true })} />
            </div>
            <div>
                <label htmlFor="no_of_likes">Number of Likes:</label>
                <input type="number" id="no_of_likes" {...register('no_of_likes')} />
            </div>
            <div>
                <label htmlFor="content_image">Content Image:</label>
                <input type="file" id="content_image" {...register('content_image')} accept="image/*" />
            </div>
            <div>
                <label htmlFor="comments">Comments (JSON format):</label>
                <textarea id="comments" {...register('comments')} placeholder='["comment1", "comment2"]'></textarea>
            </div>
            <div>
                <label htmlFor="tags">Tags (JSON format):</label>
                <textarea id="tags" {...register('tags')} placeholder='["tag1", "tag2"]'></textarea>
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;
