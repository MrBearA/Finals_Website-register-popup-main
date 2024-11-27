import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/Merchandise.css';

const Merchandise = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterByType = (type) => {
    setSelectedType(type);
    if (type === '' || type === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.type.toLowerCase() === type.toLowerCase());
      setFilteredProducts(filtered);
    }
  };

  const productTypes = ['All', ...new Set(products.map((product) => product.type))];

  return (
    <div className="merchandise-container">
      <h1 className="main-title">MERCHANDISE</h1>
      <p className="sub-title">Explore our exclusive collection</p>
      <div className="merchandise-content">
        <div className="filter-section">
          <h3>Filter by Type</h3>
          {productTypes.map((type) => (
            <button 
              key={type} 
              onClick={() => handleFilterByType(type)}
              className={selectedType === type ? 'active' : ''}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.images ? product.images[0] : product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price.toFixed(2)}</p>
              <Link to={`/product/${product._id}`} className="view-details-btn">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;

