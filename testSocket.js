const io = require('socket.io-client');

const socket = io('http://localhost:8000'); // Replace with your server's URL

socket.on('connect', () => {
    console.log('Connected to the server');

    // Send a new comment after connecting
    const commentData = {
        "user_id": '672a3d9bbfbbc7963d54fd01', // Replace with a valid user ID
        "postId": "672a529ba7f16688819ded53",
        "content": 'This is a testerrr comment'
    };

    socket.emit('newComment', commentData);
});

socket.on('receiveComment', (comment) => {
    console.log('New comment received:', comment);
});

socket.on('disconnect', () => {
    console.log('Disconnected from the server');
});
