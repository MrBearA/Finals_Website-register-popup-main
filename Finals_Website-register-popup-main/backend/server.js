const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit if MongoDB fails to connect
    });

// Importing routes
const merchandiseRoutes = require('./routes/merchandiseRoutes');
const productDetailRoutes = require('./routes/productDetailRoutes');

// Routes
app.use('/api/merchandise', merchandiseRoutes);
app.use('/api/productDetail', productDetailRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Coffee Shop API!');
});
