// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection code
mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Example of a simple route
app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

require('dotenv').config(); // Load environment variables from .env

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

const merchandiseRoutes = require('./routes/merchandiseRoutes');
const productDetailRoutes = require('./routes/productDetailRoutes');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/merchandise', merchandiseRoutes);
app.use('/api/productDetail', productDetailRoutes);

mongoose.connect('mongodb://localhost:27017/coffee-shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));