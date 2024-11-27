import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css_files/ProductDetail.css';
import axios from 'axios';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [hover, setHover] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const { id } = useParams();

  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];
  const colorOptions = ['black', 'white'];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/${id}`);
        console.log('Product data:', response.data);
        console.log('Product category:', response.data.category);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      if (!product) {
        console.error('No product data available');
        return;
      }

      console.log('Product data:', {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image
      });

      const response = await axios.post('http://localhost:5000/api/cart/add', {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.category === 'Graphic Tee' ? selectedSize : null
      });

      console.log('Response:', response.data);
      
      if (response.status === 200) {
        alert('Item added to cart successfully!');
      }
    } catch (error) {
      console.error('Error adding to cart:', error.response?.data || error);
      alert('Failed to add item to cart');
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-images-section">
        <div className="image-window">
          <div className="window-frame">
            <img 
              src={product.images ? product.images[selectedImage] : product.image}
              alt={product.name}
              className="main-image"
            />
          </div>
        </div>

        <div className="thumbnail-container">
          {product.images && product.images.map((image, index) => (
            <div 
              key={index} 
              className={`thumbnail ${selectedImage === index ? 'selected' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image} 
                alt={`${product.name} - Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="product-info-panel">
        <div className="product-header">
          <h1 className="product-name">{product.name}</h1>
          <div className="rating-section">
            {[...Array(5)].map((_, index) => {
              const value = index + 1;
              return (
                <span
                  key={value}
                  className={`star ${value <= (hover || rating) ? 'selected' : ''}`}
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(null)}
                  style={{ 
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: value <= (hover || rating) ? 'gold' : '#ccc',
                    transition: 'color 0.2s ease',
                    margin: '0 2px'
                  }}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>

        <div className="price-section">
          <p>{Number(product.price).toFixed(2)}</p>
        </div>

        <hr className="divider" />

        <div className="description-section">
          <p>{product.description}</p>
        </div>

        {(product?.category === 'Graphic Tee' || 
          product?.category === 'graphic tee' || 
          product?.category === 'Tee' || 
          product?.name?.includes('Tee')) && (
          <div className="size-selector">
            <h3>Select Size</h3>
            <div className="size-options">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {product?.name === 'Retro Graphic Tee' && (
          <div className="color-selector">
            <h3>Select Color</h3>
            <div className="color-options">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => handleColorSelect(color)}
                  style={{
                    backgroundColor: color,
                    border: color === 'white' ? '1px solid #ccc' : 'none'
                  }}
                >
                  {selectedColor === color && <span className="selected-indicator"></span>}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="action-buttons">
          <div 
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

