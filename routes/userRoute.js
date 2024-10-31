// routes/userRoute.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const user_route = express.Router();

// User Registration Route
user_route.post('/register', registerUser);

// User Login Route
user_route.post('/login', loginUser);

module.exports = user_route;
