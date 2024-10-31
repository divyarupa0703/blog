// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, 'your_jwt_secret', {
        expiresIn: '30d', // Token valid for 30 days
    });
};

module.exports = generateToken;
