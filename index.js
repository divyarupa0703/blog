const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');

// Import Models at the top
const Comment = require('./models/commentModel.js');
const Post = require('./models/postModel.js');
const Like = require('./models/likeModel.js'); // Ensure this model is defined

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI || "your_fallback_uri_here";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Import and use routes
const postRouter = require('./routes/postRoute.js');
app.use('/api', postRouter);

const userRouter = require('./routes/userRoute.js');
app.use('/api/users', userRouter);

// Like a post
app.post('/api/posts/:postId/like', async (req, res) => {
    const { postId } = req.params;  // The post ID from the URL
    const { userId } = req.body;    // The user liking the post

    // Validate the userId
    if (!userId) {
        return res.status(400).json({ message: "userId is required" });
    }

    try {
        console.log(`Received like request for postId: ${postId}, userId: ${userId}`);

        // Check if the post exists in the database
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Check if the user already liked the post
        const existingLike = await Like.findOne({ user_id: userId, post_id: postId });

        if (existingLike) {
            return res.status(400).json({ message: "You already liked this post" });
        }

        // Add like to the database
        const newLike = new Like({ user_id: userId, post_id: postId });
        await newLike.save();

        // Increment the like count in the Post model
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $inc: { no_of_likes: 1 } },
            { new: true }
        );

        // Respond with success message and updated post data
        res.status(200).json({
            message: "Post liked successfully",
            post: updatedPost
        });
    } catch (err) {
        // Error handling with more detailed logging
        console.error("Error in likePost:", err);
        res.status(500).json({
            message: "Error liking post",
            error: err.message
        });
    }
});


// Add a comment
// Add a comment to a post
app.post('/api/posts/:postId/comment', async (req, res) => {
    const { postId } = req.params;
    const { userId, content } = req.body; // userId and content should be passed in the request body

    try {
        // Create a new comment
        const newComment = new Comment({
            content,
            user_id: userId,
            post_id: postId,
        });

        // Save the comment to the database
        await newComment.save();

        // Add the comment to the post
        const post = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: newComment._id } }, // Add the comment ID to the post's comments array
            { new: true }
        );

        // Send the response with the new comment
        res.status(201).json({ message: 'Comment added successfully', post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/posts/:postId/comments', async (req, res) => {
    const { postId } = req.params;

    try {
        // Fetch comments for the specific postId
        const comments = await Comment.find({ post_id: postId })
            .populate('user_id', 'username name')  // Populate user info
            .sort({ createdAt: 1 });  // Sort by creation date

        if (!comments || comments.length === 0) {
            return res.status(404).json({ message: "No comments found for this post" });
        }

        // Send the response with the comments
        res.status(200).json({
            comments: comments.map(comment => ({
                id: comment._id,
                content: comment.content,
                userId: comment.user_id._id,
                username: comment.user_id.username, // Assuming 'username' exists in 'User' model
                createdAt: comment.createdAt,
            })),
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Start HTTP server and integrate Socket.IO
const server = http.createServer(app);
const io = socketIo(server); // Initializes socket.io

// Socket.IO event handling
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
