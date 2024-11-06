const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content_image: {
        type: String, // Store image path as a string
        required: true
    },
    content_title: {
        type: String,
        required: true
    },
    no_of_likes: {
        type: Number,
        default: 0
    },
    post_id: {
        type: String, // Use String if you want to assign a custom ID
        default: () => new mongoose.Types.ObjectId().toString(), // Automatically generate an ID
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Reference to Comment model
        default: []
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag' // Reference to Tag model
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Storing user IDs who liked the post
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
