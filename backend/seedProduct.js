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
    image: 'https://sw6.elbenwald.de/thumbnail/74/b6/b0/1679614796/E1075886_1_1920x1920.jpg',
    brand: 'Extra Hours',
    description: 'A coffee mug that lights up in neon colors while you sip your coffee.',
    price: 399,
    type: 'mug',
  },
  {
    id: 2,
    name: 'Cyberpunk Thermos Mug',
    image: 'https://cyberpunkcollection.b-cdn.net/wp-content/uploads/2021/01/ia_3600000005-680x680.jpg',
    brand: 'Extra Hours',
    description: 'An insulated thermos mug with a sleek design, perfect for keeping your drinks cold or hot.',
    price: 999,
    type: 'mug',
  },
  {
    id: 3,
    name: 'Cyberpunk Notebook',
    image: 'https://fragstore.com/images/detailed/163/0_3477_1e233cff986ccfc4507f97f022710ce5.png',
    brand: 'Extra Hours',
    description: 'A futuristic notebook to keep records of your past for the future.',
    price: 109,
    type: 'notebook',
  },
  {
    id: 4,
    name: 'Holographic Notebook',
    image:  'https://down-ph.img.susercontent.com/file/e823551867f05a23337dfdd7b9a58f53.webp',
    brand: 'Extra Hours',
    description: 'A holographic notebook that captures the essence of cyberpunk design.',
    price: 159,
    type: 'notebook',
  },
  {
    id: 5,
    name: 'Rancid Nation x Extra Hours Shark Tank Graphic Tee',
    image: 'https://www.rancidnation.com/image/cache/catalog/111111111111Akungfu/anime%20teez11-750x750.gif',
    brand: 'Extra Hours, Rancid Nation',
    description: 'First ever collab of Rancid Nation and Extra Hours.',
    price: 499,
    type: 'graphic tee',
  },
  {
    id: 6,
    name: 'Retro Graphic Tee',
    image:  'https://techwearstorm.com/cdn/shop/files/segawa-oversized-t-shirt-black-m-techwear-storm-849_2000x.jpg?v=1716090150',
    brand: 'Extra Hours',
    description: 'A retro-styled graphic tee that celebrates vintage designs.',
    price: 499,
    type: 'graphic tee',
  },
  {
    id: 7,
    name: 'Cyberpunk Stainless Steel Tumbler',
    image:  'https://static.wixstatic.com/media/ea07e6_1f2daf69dd06432dafe443860003b40b~mv2.jpg/v1/fill/w_704,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea07e6_1f2daf69dd06432dafe443860003b40b~mv2.jpg',
    brand: 'Extra Hours',
    description: 'A sleek stainless steel tumbler that shines with every movement, ideal for carrying your essentials.',
    price: 899,
    type: 'tumbler',
  },
  {
    id: 8,
    name: 'Cyberpunk Travel Mug',
    image:   'https://i.etsystatic.com/37182844/r/il/5b4cc1/5737768938/il_794xN.5737768938_5jet.jpg',
    brand: 'Extra Hours',
    description: 'A stylish travel mug designed for coffee lovers on the go.',
    price: 599,
    type: 'mug',
  },
  {
    id: 9,
    name: 'Cyberpunk City Tote Bag',
    image:'https://ctl.s6img.com/society6/img/VLC-UUVCzevp-MaToPEQIN4_oCY/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/96e17e9d43fa4af7a04a8ab4533c2908/~~/cyberpunk-city1904814-bags.jpg?attempt=0',
    brand: 'Extra Hours',
    description: 'A stylish holographic tote bag perfect for carrying your essentials while adding a touch of cyberpunk flair.',
    price: 499,
    type: 'tote bag',
  },
  {
    id: 10,
    name: 'Cyberpunk Weekend Bag',
    image:  'https://ctl.s6img.com/society6/img/_E6H244OARySGheph40Lf5tLRBg/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/a22efae6866f4ebd92d176d344ff02de/~~/japanese-cyberpunk-bags.jpg?attempt=0',
    brand: 'Extra Hours',
    description: 'A durable weekend bag designed for short trips with a cyberpunk aesthetic.',
    price: 499,
    type: 'tote bag',
  },
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
