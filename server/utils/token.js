const jwt = require('jsonwebtoken');

// Helper function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        { _id: user._id, email: user.email },
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
};

module.exports = { generateToken };
