const Post = require('../models/postModel'); // Ensure this path is correct
const mongoose = require('mongoose');
const Tag = require('../models/tagModel');

// Create a new post
// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { user_id, content_title, tags } = req.body;
        const content_image = req.file?.path; // Use optional chaining

        if (!content_image) {
            return res.status(400).json({ message: "Image upload required." });
        }

        // Wrap tags in an array if it's not an array
        const tagsArray = Array.isArray(tags) ? tags : [tags];

        // Create or find tags
        const tagIds = await Promise.all(tagsArray.map(async tagName => {
            let tag = await Tag.findOne({ name: tagName });
            if (!tag) {
                tag = await new Tag({ name: tagName }).save();
            }
            return tag._id; // Return the ObjectId of the tag
        }));

        const newPost = new Post({
            user_id,
            content_image,
            content_title,
            tags: tagIds // Assign ObjectId array for tags
        });

        const savedPost = await newPost.save();
        res.status(201).json({
            message: "Post created successfully",
            postId: savedPost.post_id,
            post: savedPost
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: "Error creating post",
            error: error.message
        });
    }
};



// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user_id', 'username') // Assuming User model has username
            .populate('tags'); // Populate tag details if needed
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching posts",
            error: error.message
        });
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id)
            .populate('user_id', 'username') // Populate user details
            .populate('tags'); // Populate tag details

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching post",
            error: error.message
        });
    }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true // Run validators on the updated document
        });

        if (!updatedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post updated successfully",
            post: updatedPost
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating post",
            error: error.message
        });
    }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting post",
            error: error.message
        });
    }
};

// Like a post
exports.likePost = async (req, res) => {
    const { id } = req.params; // The post ID from the URL
    const { user_id } = req.body; // The user liking the post

    // Validate the user_id
    if (!user_id) {
        return res.status(400).json({ message: "user_id is required" });
    }

    try {
        // Find the post by ID
        const post = await Post.findById(id);

        // Check if the post exists
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Check if the user already liked the post
        if (post.likes.includes(user_id)) {
            return res.status(400).json({ message: "You already liked this post" });
        }

        // Add the user ID to the likes array
        post.likes.push(user_id);

        // Save the updated post
        const updatedPost = await post.save();

        // Respond with success message and updated post data
        res.status(200).json({
            message: "Post liked successfully",
            post: updatedPost
        });
    } catch (error) {
        // Error handling
        console.error("Error liking post:", error);
        res.status(500).json({
            message: "Error liking post",
            error: error.message
        });
    }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
    const { id } = req.params; // The post ID from the URL
    const { user_id } = req.body; // The user unliking the post

    try {
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Check if the user has already liked the post
        if (!post.likes.includes(user_id)) {
            return res.status(400).json({ message: "You haven't liked this post" });
        }

        // Remove the user from the likes array
        post.likes = post.likes.filter(like => !like.equals(user_id));

        // Save the updated post
        const updatedPost = await post.save();

        res.status(200).json({
            message: "Post unliked successfully",
            post: updatedPost
        });
    } catch (error) {
        res.status(500).json({
            message: "Error unliking post",
            error: error.message
        });
    }
};
