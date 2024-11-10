// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const registerUser = (userData) => axios.post(`${API_URL}/users/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/users/login`, userData);

export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const fetchComments = (postId) => axios.get(`${API_URL}/comments`, { params: { postId } });
export const postComment = (commentData) => axios.post(`${API_URL}/comments`, commentData);
