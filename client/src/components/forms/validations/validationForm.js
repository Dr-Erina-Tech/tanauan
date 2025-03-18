// validation.js

// Validate if email format is correct
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      return "Invalid email format!";
  }
  return null; // No error
};

// Updated password complexity validation
export const validatePasswordComplexity = (password) => {
  // Updated regex to allow more special characters
  const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/;
  if (!complexityRegex.test(password)) {
    return "Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
  }
  return null; // No error
};

// Validate if password and confirmPassword match
export const validatePasswordMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) {
      return "Passwords do not match!";
  }
  return null; // No error
};

// Validate that required fields are not empty
export const validateRequiredFields = (fields) => {
  for (const field in fields) {
      if (!fields[field]) {
          return `${field} is required!`;
      }
  }
  return null; // No error
};
