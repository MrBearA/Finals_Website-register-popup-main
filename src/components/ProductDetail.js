import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css_files/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.images[0]);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  const handleReviewSubmit = () => {
    if (!reviewText.trim()) return; // Prevent submitting empty reviews
    const newReview = { text: reviewText, rating };
    setReviews([...reviews, newReview]);
    setReviewText('');
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="overlay"></div>
      <div className="product-detail">
        <div className="image-gallery">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} className="product-image" />
            <div className="magnifying-glass">
              <img src={selectedImage} alt={product.name} className="zoomed-image" />
            </div>
          </div>
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="thumbnail"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <h3>Price: ${product.price}</h3>
          <div className="description">
            <p>{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div className="size-spacing">
              <h4>Select Size:</h4>
              <div className="size-buttons">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeSelection(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="color-options">
              <h4>Select Color:</h4>
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`color-button ${selectedColor === color ? 'selected' : ''} ${color}`}
                  onClick={() => handleColorSelection(color)}
                />
              ))}
            </div>
          )}

          {/* Quantity Selection */}
          <div className="quantity-selection">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </div>

          {/* Add to Cart */}
          <button className="add-to-cart-btn">Add to Cart</button>

          {/* Star Rating */}
          <div className="rating-spacing">
            <h4>Rate this product:</h4>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`star-button ${rating >= star ? 'selected' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Review Section */}
          <div className="reviews">
            <h4>Reviews:</h4>
            <ul className="review-list">
              {reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{' '}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                  <p>{review.text}</p>
                </li>
              ))}
            </ul>

            {/* Submit Review */}
            <div className="review-submit-container">
              <textarea
                className="review-input"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write a review..."
              />
              <button className="submit-review-button" onClick={handleReviewSubmit}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

