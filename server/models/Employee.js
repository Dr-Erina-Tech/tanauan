const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the number of salt rounds for hashing
const SALT_ROUNDS = 10;

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Hash the password before saving the employee document
EmployeeSchema.pre('save', async function (next) {
  try {
    // If the password is modified (or new), hash it
    if (this.isModified('password') || this.isNew) {
      const salt = await bcrypt.genSalt(SALT_ROUNDS);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next(); // Proceed to save the employee
  } catch (err) {
    return next(err); // Handle errors
  }
});

// Method to compare a provided password with the stored hashed password
EmployeeSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error(err);
  }
};

const EmployeeModel = mongoose.model('employees', EmployeeSchema);
module.exports = EmployeeModel;
