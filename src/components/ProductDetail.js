import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css_files/ProductDetail.css';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        console.log('Fetched product:', data);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        {product.imageurl && (
          <img 
            src={product.imageurl} 
            alt={product.name} 
            onError={(e) => {
              console.error('Image failed to load:', product.imageurl);
              e.target.src = '/path/to/fallback/image.jpg';
            }}
          />
        )}
      </div>
      
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="price-section">
          <p>Price: ${Number(product.price).toFixed(2)}</p>
        </div>
        
        <div className="quantity-section">
          <label>Quantity:</label>
          <input 
            type="number" 
            min="1" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="rating-section">
          <p>Rate this product:</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="review-section">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review..."
          />
          <button className="submit-review">Submit Review</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

