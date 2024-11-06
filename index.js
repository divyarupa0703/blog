const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const http = require('http');
const socketIo = require('socket.io');

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
const postRouter = require('./routes/postRoute.js'); // Example route for posts
app.use('/api', postRouter);

const userRouter = require('./routes/userRoute.js'); // User registration and login routes
app.use('/api/users', userRouter);

// Create HTTP server and initialize Socket.IO
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.IO with the HTTP server

// Socket.IO event handling
io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen for new comments from the client
    socket.on('newComment', async (commentData) => {
        console.log(commentData);
        try {
            // Create a new comment in the database
            const Comment = require('./models/commentModel.js'); // Import the Comment model
            const comment = new Comment({
                user_id: new mongoose.Types.ObjectId(commentData.userId),
                post_id: new mongoose.Types.ObjectId(commentData.postId),
                content: commentData.content
            });
            await comment.save();

            // Optionally, update the post to include this comment
            const Post = require('./models/postModel.js'); // Import the Post model
            await Post.findByIdAndUpdate(commentData.postId, {
                $push: { comments: comment._id } // Add comment ID to the post's comments array
            });
            
            // Populate user details for the comment before sending
            await comment.populate('user_id', 'username');

            // Emit the comment to all connected clients
            io.emit('receiveComment', comment);
        } catch (error) {
            console.error('Error saving comment:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Get comments from the database
app.get('/api/comments', async (req, res) => {    
    try {
        const userId = new mongoose.Types.ObjectId("672a42e414f5bf4d8c41c567");
        const comments = await Comment.find({ user_id: userId }).populate('user_id', 'username');
        res.json(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => { // Change from app.listen to server.listen
    console.log(`Server is running on port ${PORT}`);
});
