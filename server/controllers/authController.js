const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const EmployeeModel = require('../models/Employee');

//Utility function for email format validation
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

//Utility function for password strength validation
const validatePassword = (password) => {
  return password.length >= 6; //Simple length check
};

// Register new employee
const registerEmployee = async (req, res) => {
    const { name, email, password } = req.body;
    

    //validation for name, email, passwords
    if (!name || !email || !password) {
        return res.status(400).json({ message:" All fields (name, email, password" })
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid Email Format" });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }


    try {
        //check if email is already in use
        const existingUser = await EmployeeModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered"});
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the new user with hashed password
        const employee = await EmployeeModel.create({ name, email, password: hashedPassword });
        res.json(employee);

    } catch (err) {
        res.status(500).json({ message: "Error registering employee", error: err });
    }
};
    
// Login employee
const loginEmployee = async (req, res) => {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid email format"});
    }

    try {
       
        // Find the user by email
        const user = await EmployeeModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email not found" });
        }


        // Compare the entered password with the stored hashed password
        const validPassword = await bcrypt.compare(password.trim(), user.password);
        
        if (!validPassword) {
            console.log("Password comparison failed");
            return res.status(400).json({ message: "The password is incorrect" });
        }
        console.log("Password comparison successful");
        // If password is valid, create a JWT token
        const token = jwt.sign(
            { _id: user._id, email: user.email },
             process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        // Set the cookie with the token
        res.cookie('auth_token', token, { httpOnly: true, maxAge: 3600000 }) // 1 hour expiry
           .json({ message: "Success" });
        
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err });
    }
};

module.exports = { registerEmployee, loginEmployee };