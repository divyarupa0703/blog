const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

app.use(cors({
    origin: '*'
}));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/REACT", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Serve static files (like images)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Import and use routes
const post_route = require('./routes/postRoute');
app.use('/api', post_route);

const user_route = require('./routes/userRoute');
app.use('/api/users', user_route);

// Start the server
app.listen(8000, function () {
    console.log("Server is running on port 8000");
});
