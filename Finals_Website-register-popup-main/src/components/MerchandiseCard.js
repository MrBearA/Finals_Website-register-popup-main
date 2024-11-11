import React from 'react';
import { Link } from 'react-router-dom';
import '../css_files/MerchandiseCard.css';

const MerchandiseCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/item/${product.id}`}>
                <div className="holographic-box">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="short-description">{product.description}</p>
                    <div className="product-price">₱{product.price}</div>
                </div>
            </Link>
        </div>
    );
};

export default MerchandiseCard;
