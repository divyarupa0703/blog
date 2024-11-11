import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const SinglePost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
  
    const token = localStorage.getItem("token");
    const userId = token ? jwtDecode(token).id : null;
  
      // Fetch post and comments on postId change
      useEffect(() => {
          const fetchPost = async () => {
              try {
                  const response = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                  setPost(response.data);
                  setLoading(false);
              } catch (error) {
                  console.error("Error fetching the post:", error);
                  setError("Failed to load post.");
                  setLoading(false);
              }
          };
          const fetchComments = async () => {
              try {
                  const response = await axios.get(`http://localhost:8000/api/posts/${postId}/comments`);
                  setComments(response.data.comments || []);  // Set the comments
              } catch (error) {
                  console.error("Error fetching comments:", error.response ? error.response.data : error.message);
                 // setError("Failed to load comments.");
              }
          };
         
           fetchComments();
          fetchPost();
      }, [postId]);
  
    // Function to handle like button click
    const handleLike = async () => {
        if (!userId) {
            alert("You need to be logged in to like this post.");
            return;
        }
  
        try {
            const response = await axios.post(
                `http://localhost:8000/api/posts/${postId}/like`,
                { userId },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            setPost(response.data.post);  // Update the post state
            console.log(response.data.message);
        } catch (error) {
            console.error("Error liking the post:", error.response ? error.response.data : error);
            alert('Failed to like the post.');
        }
    };
  
    // Handle adding a new comment
    const handleCommentSubmit = async () => {
        if (!userId || !comment) {
            alert("You need to be logged in and provide a comment.");
            return;
        }
  
        try {
            const response = await axios.post(
                `http://localhost:8000/api/posts/${postId}/comment`,
                { userId, content: comment },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            // Directly update the comments list without waiting for another API call
            const newComment = response.data.post.comments[response.data.post.comments.length - 1];
            setComments(prevComments => [...prevComments, newComment]);  // Add new comment
            setComment("");  // Reset comment input
            alert("Comment added successfully!");
        } catch (error) {
            console.error("Error adding the comment:", error.response ? error.response.data : error);
            alert("Failed to add the comment.");
        }
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  
      return post ? (
          <div>
              <h2>{post.content_title}</h2>
              <img
                  src={`${process.env.PUBLIC_URL}${post.content_image}`}
                  alt={post.content_title}
                  style={{ width: '300px', height: 'auto' }}
              />
              <p>{post.content_title}</p>
              <p>{new Date(post.date).toLocaleString()}</p>
              <div>Tags: {post.tags.map(tag => tag.name).join(', ')}</div>
              <p>Likes: {post.no_of_likes}</p>
              <button onClick={handleLike}>Like</button>
  
            {/* Comment Section */}
            <div>
                <h3>Comments:</h3>
                <ul>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <li key={comment._id}>
                                <p> {comment.content}</p>
                            </li>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </ul>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button onClick={handleCommentSubmit}>Submit Comment</button>
            </div>
        </div>
    ) : (
        <p>Post not found</p>
    );
  };


  export default SinglePost;