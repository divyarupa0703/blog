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
//app.use('/postImages', express.static(path.join(__dirname, '../post-creator/public/postImages')));

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
    const { userId, content } = req.body;

    if (!userId || !content) {
        return res.status(400).json({ error: 'userId and content are required' });
    }

    try {
        // Check if the post exists
        const postExists = await Post.findById(postId);
        if (!postExists) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Create a new comment
        const newComment = new Comment({
            content,
            user_id: userId,
            post_id: postId,
        });

        // Save the comment to the database
        await newComment.save();

        // Add the comment to the post
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: newComment._id } },
            { new: true }
        ).populate({
            path: 'comments',
            populate: {
                path: 'user_id',
               // Assuming the user has a 'username' field
            }
        });

        // Send the response with the updated post and populated comments
        res.status(201).json({ message: 'Comment added successfully', post: updatedPost });
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
            .sort({ createdAt: 1 });  // Sort by creation date

        if (!comments || comments.length === 0) {
            return res.status(404).json({ message: "No comments found for this post" });
        }

        // Send the response with the comments
        res.status(200).json({
            comments: comments.map(comment => ({
                id: comment._id,
                content: comment.content,
                userId: comment.user_id, // Only exposing userId
                createdAt: comment.createdAt,
            })),
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Update a comment
app.put('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;  // The comment ID from the URL
    const { content } = req.body;     // The updated content for the comment

    try {
        // Find the comment by its ID
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Check if the user updating the comment is the one who posted it
        if (comment.user_id.toString() !== req.body.userId) {
            return res.status(403).json({ message: "You are not authorized to update this comment" });
        }

        // Update the content of the comment
        comment.content = content;
        await comment.save();

        // Respond with the updated comment
        res.status(200).json({ message: "Comment updated successfully", comment });
    } catch (err) {
        console.error("Error in updateComment:", err);
        res.status(500).json({ message: "Error updating comment", error: err.message });
    }
});

// Delete a comment
app.delete('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;  // The comment ID from the URL

    try {
        // Find the comment by its ID
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Check if the user deleting the comment is the one who posted it
        if (comment.user_id.toString() !== req.body.userId) {
            return res.status(403).json({ message: "You are not authorized to delete this comment" });
        }

        // Delete the comment from the database
        await comment.remove();

        // Remove the comment from the associated post's comments array
        await Post.findByIdAndUpdate(
            comment.post_id,
            { $pull: { comments: commentId } },  // Pull the comment from the comments array
            { new: true }
        );

        // Respond with a success message
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error("Error in deleteComment:", err);
        res.status(500).json({ message: "Error deleting comment", error: err.message });
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
