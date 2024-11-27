const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart');

// Add item to cart
router.post('/add', async (req, res) => {
  try {
    const { productId, name, price, image, userId } = req.body;

    // Check if item already exists in cart
    let cartItem = await CartItem.findOne({ productId, userId });

    if (cartItem) {
      // If exists, increment quantity
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      // If not, create new cart item
      cartItem = new CartItem({
        productId,
        name,
        price,
        image,
        userId,
        quantity: 1
      });
      await cartItem.save();
    }

    res.status(200).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart', error: error.message });
  }
});

// Get cart items for user
router.get('/:userId', async (req, res) => {
  try {
    const cartItems = await CartItem.find({ userId: req.params.userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error: error.message });
  }
});

module.exports = router;