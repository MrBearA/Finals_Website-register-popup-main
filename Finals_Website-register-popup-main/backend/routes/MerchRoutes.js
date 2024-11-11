const express = require('express');
const Merchandise = require('../models/merchandiseModel');

const router = express.Router();

// Fetch all merchandise
router.get('/', async (req, res) => {
  try {
    const items = await Merchandise.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a merchandise item
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const newItem = new Merchandise({ name, description, price, imageUrl });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
