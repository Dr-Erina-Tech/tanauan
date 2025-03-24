const mongoose = require('mongoose');

const BarangaySchema = new mongoose.Schema({
  barangayName: { type: String, required: true },
  barangayDescription: { type: String, required: true },
  facebookLink: { type: String, required: false }  // Optional social media link
});

const Barangay = mongoose.model('Barangay', BarangaySchema);
module.exports = Barangay;
