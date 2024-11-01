// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from 'post-creator\src\components\PostForm.js';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
