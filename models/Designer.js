const mongoose = require('mongoose');

const designerSchema = new mongoose.Schema({
  name: String,
  description: String,
  years: Number,
  projects: Number,
  price: Number,
  phoneNumbers: [String],
  rating: Number,
  teamSize: Number,
  location: String,
  image: String
});

module.exports = mongoose.model('Designer', designerSchema); 