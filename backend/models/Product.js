// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  type: { type: String, required: true }, 
  sizes: { type: [String], required: true }, 
  reviews: { type: [String], default: [] }, 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
