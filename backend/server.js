const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered. Please log in.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login Route
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ 
      message: `Welcome back, ${user.name}!`, 
      token, 
      name: user.name,
      userId: user._id 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

const Product = require('./models/Product');

// Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});

// Fetch single product by ID
app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Fetching product:', id);
    
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add this near your other schemas
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  price: Number,
  image: String,
  quantity: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Add these new routes after your existing routes
// Add to cart
app.post('/api/cart/add', async (req, res) => {
  try {
    console.log('Received cart request body:', req.body);
    
    const { productId, name, price, image } = req.body;

    // Validate the data
    if (!productId) {
      console.log('Missing productId');
      return res.status(400).json({ message: 'Product ID is required' });
    }

    if (!name) {
      console.log('Missing name');
      return res.status(400).json({ message: 'Product name is required' });
    }

    if (!price) {
      console.log('Missing price');
      return res.status(400).json({ message: 'Product price is required' });
    }

    // Create the cart item
    const cartItem = new Cart({
      productId,
      name,
      price,
      image,
      quantity: 1
    });

    console.log('Attempting to save cart item:', cartItem);

    await cartItem.save();
    
    console.log('Cart item saved successfully');
    
    res.status(200).json({ 
      message: 'Item added to cart successfully',
      cartItem 
    });

  } catch (error) {
    console.error('Server error:', {
      message: error.message,
      stack: error.stack
    });
    
    res.status(500).json({ 
      message: 'Error adding item to cart', 
      error: error.message 
    });
  }
});

// Get user's cart items
app.get('/api/cart/:userId', async (req, res) => {
  try {
    const cartItems = await CartItem.find({ userId: req.params.userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error: error.message });
  }
});

// Update cart item quantity
app.put('/api/cart/update/:itemId', async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await CartItem.findByIdAndUpdate(
      req.params.itemId,
      { quantity },
      { new: true }
    );
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart item', error: error.message });
  }
});

// Remove item from cart
app.delete('/api/cart/remove/:itemId', async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.itemId);
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing cart item', error: error.message });
  }
});

// Clear user's cart
app.delete('/api/cart/clear/:userId', async (req, res) => {
  try {
    await CartItem.deleteMany({ userId: req.params.userId });
    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error: error.message });
  }
});

// Add this after your existing schemas
const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: String,
  quantity: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

// Get cart items
app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error: error.message });
  }
});

// Add these console logs to track the request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

