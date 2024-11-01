const express = require('express');
const postController = require('../controllers/postController'); // Adjust path as necessary
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/postImages')); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});
const upload = multer({ storage: storage });

// Define routes
router.post('/posts', upload.single('content_image'), postController.createPost);
router.get('/posts', postController.getAllPosts); // For retrieving all posts
router.get('/posts/:id', postController.getPostById); // For retrieving a specific post by ID
router.put('/posts/:id', postController.updatePost); // For updating a specific post by ID
router.delete('/posts/:id', postController.deletePost); // For deleting a specific post by ID

module.exports = router;
