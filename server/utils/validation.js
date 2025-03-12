// Utility function for email format validation
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Utility function for password strength validation
const validatePassword = (password) => {
    return password.length >= 6; // Simple length check, can be extended for more complex validations
};

module.exports = { validateEmail, validatePassword };
