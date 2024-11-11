const mongoose = require('mongoose');

const merchandiseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

const Merchandise = mongoose.model('Merchandise', merchandiseSchema);
module.exports = Merchandise;
