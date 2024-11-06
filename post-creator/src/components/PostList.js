import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map(post => (
                <div key={post._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>{post.content_title}</h3>
                    <img src={post.content_image} alt={post.content_title} style={{ width: '100px', height: 'auto' }} />
                    <p>{post.content_title.slice(0, 100)}...</p> {/* Assuming a short preview is fine */}
                    <div>
                        <span>Tags: {post.tags.map(tag => tag.name).join(', ')}</span>
                        <span> | Date: {new Date(post.date).toLocaleDateString()}</span>
                        <span> | Likes: {post.no_of_likes}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;