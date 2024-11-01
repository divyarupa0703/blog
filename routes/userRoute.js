const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { validateRegister, validateLogin } = require('../middleware/validators');

const router = express.Router();

// Registration route
router.post('/signup', validateRegister, registerUser);

// Login route
router.post('/login', validateLogin, loginUser);

module.exports = router;
