const express = require('express');
const router = express.Router();
const Barangay = require('../models/Barangay');

// POST: Add a new barangay
router.post('/', async (req, res) => {
  try {
    const { barangayName, barangayDescription, facebookLink } = req.body;
    
    // Create a new Barangay instance
    const newBarangay = new Barangay({
      barangayName,
      barangayDescription,
      facebookLink
    });

    // Save the barangay to the database
    await newBarangay.save();
    res.status(201).json({ message: 'Barangay added successfully', barangay: newBarangay });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add barangay', error });
  }
});

module.exports = router;
