const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json()); // Parse JSON payloads

// MongoDB connection
const uri = process.env.MONGODB_URI || "your_fallback_uri_here"; // Replace with your actual MongoDB URI or use .env
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Import and use routes
const postRouter = require('./routes/postRoute'); // Example route for posts
app.use('/api', postRouter);

const userRouter = require('./routes/userRoute'); // User registration and login routes
app.use('/api/users', userRouter);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
