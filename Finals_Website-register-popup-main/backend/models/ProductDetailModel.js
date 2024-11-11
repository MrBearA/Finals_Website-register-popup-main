const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const productDetailSchema = new mongoose.Schema({
  merchandiseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Merchandise', required: true },
  additionalInfo: { type: String }, // Example additional field
  availableColors: [String],
  availableSizes: [String],
});

const ProductDetail = mongoose.model('ProductDetail', productDetailSchema);
module.exports = ProductDetail;

// Fetch product details for a specific merchandise item
router.get('/:id', async (req, res) => {
  try {
    const details = await ProductDetail.findOne({ merchandiseId: req.params.id });
    res.json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add details for a merchandise item
router.post('/', async (req, res) => {
  const { merchandiseId, additionalInfo, availableColors, availableSizes } = req.body;
  try {
    const newDetail = new ProductDetail({ merchandiseId, additionalInfo, availableColors, availableSizes });
    await newDetail.save();
    res.status(201).json(newDetail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;