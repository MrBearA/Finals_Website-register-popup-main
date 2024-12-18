// MerchandiseCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../css_files/Merchandise.css"; 

const MerchandiseCard = ({ product }) => {
  console.log('Product data:', product);

  const defaultImage = "path/to/default/image.jpg";

  return (
    <div className="product-card">
      <img 
        src={product.image || defaultImage} 
        alt={product.name} 
        className="product-image" 
        onError={(e) => {
          console.error(`Error loading image for ${product.name}:`, e);
          e.target.src = 'path/to/fallback/image.jpg';
        }}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="short-description">{product.description}</p>
      <p className="product-price">${Number(product.price).toFixed(2)}</p>
      <Link to={`/product/${product._id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default MerchandiseCard;
