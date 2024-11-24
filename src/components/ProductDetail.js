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
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  // Fetch product details on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('Product ID is missing.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.images?.[0] || '');
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle submitting reviews
  const handleReviewSubmit = () => {
    if (!reviewText.trim() || rating === 0) return; // Prevent empty reviews
    const newReview = { text: reviewText, rating };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setRating(0);
  };

  // Handle color and size selection
  const handleColorSelection = (color) => setSelectedColor(color);
  const handleSizeSelection = (size) => setSelectedSize(size);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(value);
  };

  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="overlay"></div>
      <div className="product-detail">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img
              src={selectedImage || '/placeholder.jpg'}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="thumbnail-container">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <h3>Price: ${product.price}</h3>
          <p>{product.description}</p>

          {/* Size Selection */}
          {product.sizes?.length > 0 && (
            <div className="size-selection">
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
          {product.colors?.length > 0 && (
            <div className="color-selection">
              <h4>Select Color:</h4>
              <div className="color-buttons">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-button ${selectedColor === color ? 'selected' : ''} ${color}`}
                    onClick={() => handleColorSelection(color)}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          <div className="quantity-selection">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>

          {/* Add to Cart */}
          <button className="add-to-cart-btn">Add to Cart</button>

          {/* Star Rating */}
          <div className="rating-section">
            <h4>Rate this product:</h4>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`star ${rating >= star ? 'selected' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="review-section">
            <h4>Reviews:</h4>
            <ul className="review-list">
              {reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <p>{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</p>
                  <p>{review.text}</p>
                </li>
              ))}
            </ul>

            {/* Review Input */}
            <div className="review-input-section">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write a review..."
              ></textarea>
              <button
                className="submit-review-btn"
                onClick={handleReviewSubmit}
                disabled={!reviewText.trim() || rating === 0}
              >
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

