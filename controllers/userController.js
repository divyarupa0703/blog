// controllers/userController.js
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// Register a new user
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ success: false, msg: 'User already exists' });
        }

        // Create new user
        const user = new User({ username, password });
        await user.save();

        res.status(201).json({
            success: true,
            data: {
                _id: user._id,
                username: user.username,
                token: generateToken(user._id),
            },
        });
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                success: true,
                data: {
                    _id: user._id,
                    username: user.username,
                    token: generateToken(user._id),
                },
            });
        } else {
            res.status(401).json({ success: false, msg: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser
};
