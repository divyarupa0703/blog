// postRoute.js

const express = require('express');
const post_route = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const Post = require('../models/postModel');

// Middleware
post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({ extended: true }));
post_route.use(express.static('public'));

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/postImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });

// Create Post
post_route.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            date: req.body.date,
            image: req.file.filename
        });
        const postData = await post.save();
        res.status(200).send({ success: true, msg: 'Post created', data: postData });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(400).send({ success: false, msg: error.message });
    }
});

// Read All Posts
post_route.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send({ success: true, data: posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(400).send({ success: false, msg: error.message });
    }
});
const mongoose = require('mongoose');  // Ensure you have mongoose imported

// Read Single Post by ID
post_route.get('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        // Validate if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).send({ success: false, msg: 'Invalid post ID' });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).send({ success: false, msg: 'Post not found' });
        }
        res.status(200).send({ success: true, data: post });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});

// Update Post
post_route.put('/post/:id', upload.single('image'), async (req, res) => {
    try {
        const postId = req.params.id;

        // Validate if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).send({ success: false, msg: 'Invalid post ID' });
        }

        const updateData = {
            title: req.body.title,
            date: req.body.date,
        };
        if (req.file) {
            updateData.image = req.file.filename;
        }

        const post = await Post.findByIdAndUpdate(postId, updateData, { new: true });
        if (!post) {
            return res.status(404).send({ success: false, msg: 'Post not found' });
        }
        res.status(200).send({ success: true, msg: 'Post updated', data: post });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});

// Delete Post
post_route.delete('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        // Validate if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).send({ success: false, msg: 'Invalid post ID' });
        }

        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            return res.status(404).send({ success: false, msg: 'Post not found' });
        }
        res.status(200).send({ success: true, msg: 'Post deleted' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});


module.exports = post_route;
