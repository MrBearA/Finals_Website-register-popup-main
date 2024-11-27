const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); // Update path as necessary

dotenv.config(); // Load environment variables

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Product data
const products = [
  {
    id: 1,
    name: 'Neon Coffee Mug',
    image: ['/Imagess/merch1.jpg'],
    brand: 'Extra Hours',
    description: 'A coffee mug that lights up in neon colors while you sip your coffee.',
    price: 399,
    type: 'mug',
  },
  {
    id: 2,
    name: 'Cyberpunk Thermos Mug',
    image: ['/Imagess/merch2.jpg'],
    brand: 'Extra Hours',
    description: 'An insulated thermos mug with a sleek design, perfect for keeping your drinks cold or hot.',
    price: 999,
    type: 'mug',
  },
  {
    id: 3,
    name: 'Cyberpunk Notebook',
    image: ['/Imagess/merch3.png'],
    brand: 'Extra Hours',
    description: 'A futuristic notebook to keep records of your past for the future.',
    price: 109,
    type: 'notebook',
  },
  {
    id: 4,
    name: 'Holographic Notebook',
    image: ['/Imagess/merch4.jpg'],
    brand: 'Extra Hours',
    description: 'A holographic notebook that captures the essence of cyberpunk design.',
    price: 159,
    type: 'notebook',
  },
  {
    id: 5,
    name: 'Rancid Nation x Extra Hours Shark Tank Graphic Tee',
    image: ['/Imagess/merch5.jpg'],
    brand: 'Extra Hours, Rancid Nation',
    description: 'First ever collab of Rancid Nation and Extra Hours.',
    price: 499,
    type: 'graphic tee',
  },
  {
    id: 6,
    name: 'Retro Graphic Tee',
    image: ['/Imagess/merch6.jpg'],
    brand: 'Extra Hours',
    description: 'A retro-styled graphic tee that celebrates vintage designs.',
    price: 499,
    type: 'graphic tee',
  },
  {
    id: 7,
    name: 'Cyberpunk Stainless Steel Tumbler',
    image: ['/Imagess/merch7.jpg'],
    brand: 'Extra Hours',
    description: 'A sleek stainless steel tumbler that shines with every movement, ideal for carrying your essentials.',
    price: 899,
    type: 'tumbler',
  },
  {
    id: 8,
    name: 'Cyberpunk Travel Mug',
    image: ['/Imagess/merch8.jpg'],
    brand: 'Extra Hours',
    description: 'A stylish travel mug designed for coffee lovers on the go.',
    price: 599,
    type: 'mug',
  },
  {
    id: 9,
    name: 'Cyberpunk City Tote Bag',
    image: ['/Imagess/merch9.jpg'],
    brand: 'Extra Hours',
    description: 'A stylish holographic tote bag perfect for carrying your essentials while adding a touch of cyberpunk flair.',
    price: 499,
    type: 'tote bag',
  },
  {
    id: 10,
    name: 'Cyberpunk Weekend Bag',
    image: ['/Imagess/merch10.jpg'],
    brand: 'Extra Hours',
    description: 'A durable weekend bag designed for short trips with a cyberpunk aesthetic.',
    price: 499,
    type: 'tote bag',
  },
  {
    id: 11,
    name: 'Cyber Graphic Sweater',
    image: ['/Imagess/merch11.jpg'],
    brand: 'Extra Hours',
    description: 'A black and white sweater featuring bold digital patterns in a loose, futuristic design.',
    price: 499,
    type: 'graphic tee',
  },
  {
    id: 12,
    name: 'OniCyborg Graphic Tee',
    image: ['/Imagess/merch12.jpg'],
    brand: 'Extra Hours',
    description: 'The OniCyborg tee blends bold black and red oni cybernetic designs.',
    price: 499,
    type: 'graphic tee',
  }
];

// Seed function
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    console.log('Existing products cleared');

    await Product.insertMany(products); // Add new products
    console.log('Products seeded successfully');

    mongoose.connection.close(); // Close connection
  } catch (err) {
    console.error('Error seeding products:', err);
    mongoose.connection.close();
  }
};

// Execute the seed function
seedProducts();
