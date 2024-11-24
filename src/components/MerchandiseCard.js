// MerchandiseCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../css_files/Merchandise.css"; 

const MerchandiseCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="short-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default MerchandiseCard;
