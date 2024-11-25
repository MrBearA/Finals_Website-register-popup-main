import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/Merchandise.css';
import MerchandiseCard from './MerchandiseCard';

const Merchandise = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        
        // Fix product data to add a single 'image' field (the first image from the 'images' array)
        const updatedData = data.map((product) => ({
          ...product,
          image: product.images[0],  // Using the first image in the 'images' array
        }));

        setProducts(updatedData);
        setFilteredProducts(updatedData); // Initially display all products
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on selected type
  const handleFilterByType = (type) => {
    setSelectedType(type);
    if (type === '') {
      setFilteredProducts(products); // If no filter is selected, show all products
    } else {
      const filtered = products.filter((product) => product.type.toLowerCase().includes(type.toLowerCase()));
      setFilteredProducts(filtered);
    }
  };

  const productTypes = [...new Set(products.map((product) => product.type))]; // Get unique product types

  return (
    <div className="merchandise-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="main-title">Merchandise</h1>
        <p className="sub-title">Explore our exclusive collection</p>

        <div className="merchandise-content">
          <div className="filter-section">
            <h3>Filter by Type</h3>
            <button onClick={() => handleFilterByType('')}>All</button>
            {productTypes.map((type) => (
              <button key={type} onClick={() => handleFilterByType(type)}>
                {type}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {/* Display filtered products */}
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="product-card" key={product._id}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="short-description">{product.description}</p>
                  <p className="product-price">Price: ${product.price}</p>
                  <Link to={`/product/${product._id}`} className="view-detail-btn">View Details</Link>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;

