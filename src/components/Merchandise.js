import React, { useEffect, useState } from 'react';
import '../css_files/Merchandise.css';
import MerchandiseCard from './MerchandiseCard';

const Merchandise = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        console.log('Fetched products:', data); // Debug log
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
 
    fetchProducts();
  }, []);

  return (
    <div className="merchandise-container">
      {products.map(product => {
        console.log('Rendering product:', product); // Debug log
        return (
          <MerchandiseCard 
            key={product._id} 
            product={product} 
          />
        );
      })}
    </div>
  );
};

export default Merchandise;

