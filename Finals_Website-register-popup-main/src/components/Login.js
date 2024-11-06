import React, { useState, useEffect } from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import '../css_files/Login.css';

const Login = ({ isOpen, onClose }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) setClosing(false); // Reset closing state if the modal reopens
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true); // Start the closing animation
    setTimeout(onClose, 500); // Call the onClose function after the animation completes (0.5s)
  };

  if (!isOpen && !closing) return null; // Don't show the modal if isOpen is false and it's not closing

  return (
    <div className={`modal-overlay ${closing ? 'fade-out' : ''}`}>
      <div className="login-container modal-content">
        <div className="login-box">
          {/* Sign Up Section */}
          <div className="sign-up-section">
            <span className="close-button" onClick={handleClose}>&times;</span> {/* Close button moved here */}
            <GiCoffeeBeans size={50} style={{ marginBottom: '10px' }} />
            <h1 data-text="Hello Friend!" style={{ textAlign: 'center', margin: '20px 0' }}>Hello Friend!</h1>
            <p style={{ textAlign: 'center' }}>Register now to get exclusive deals and discounts!</p>
            <button className="sign-up-btn">Sign Up</button>
          </div>

          {/* Sign In Section */}
          <div className="sign-in-section">
            <h2 data-text="Sign-in">Sign-in</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <a href="#" className="forgot-password">Forgot Your Password?</a>
              <button type="submit" className="sign-in-btn">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
