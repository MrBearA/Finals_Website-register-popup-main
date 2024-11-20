import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from react-icons
import '../css_files/CustomNavbar';

const CustomNavbar = ({ cart }) => {
  const cartItemCount = cart.length; // Get the number of items in the cart

  return (
    <nav className="custom-navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/beverages">Beverages</Link>
        </li>
        <li>
          <Link to="/merchandise">Merchandise</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} /> {/* Cart Icon */}
            {cartItemCount > 0 && (
              <span className="cart-item-count">{cartItemCount}</span> // Show item count if it's more than 0
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomNavbar;
