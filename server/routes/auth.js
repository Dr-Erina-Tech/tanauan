const express = require('express');
const app = express();
const { loginEmployee, registerEmployee } = require('../controllers/authController');
const router = express.Router();

// POST route for registration
router.post('/register', registerEmployee);

// POST route for login
router.post('/login', loginEmployee);

module.exports = router;
