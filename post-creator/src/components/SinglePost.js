// components/SinglePost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SinglePost = () => {
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

export default SinglePost;
