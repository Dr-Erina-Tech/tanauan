const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt"); // bcrypt for password hashing
const jwt = require("jsonwebtoken"); // JWT for creating tokens
const cookieParser = require("cookie-parser"); // Cookie parser to handle cookies
require('dotenv').config(); // Import the env file for the JWT token

const authRoutes = require('./routes/auth'); // Use the authRoutes

const app = express();
app.use(express.json());

app.use(cors({ 
    credentials: true, 
    origin: ['http://localhost:3000', 'http://localhost:5173'] 
})); // Allow credentials for cookies
app.use(cookieParser()); // Middleware to parse cookies

// Use the auth routes
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Dashboard Route (protected)
app.get('/dashboard', (req, res) => {
    const token = req.cookies.auth_token; // Get the token from the cookies

    if (!token) return res.status(401).send('Access Denied');

    try {
        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET); // Use env variable
        req.user = verified; // Set the user info from the token
        res.send('Welcome to the dashboard');
    } catch (err) {
        res.status(400).send('Invalid token');
    }
});

// Logout Route (to clear the cookie)
app.post('/logout', (req, res) => {
    res.clearCookie('auth_token') // Clear the cookie
       .send('Logged out successfully');
});

// Server listening
app.listen(3002, () => {
    console.log("Server is running");
});
