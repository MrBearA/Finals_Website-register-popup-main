import React, { useState, useEffect } from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../css_files/Login.css';

const Login = ({ isOpen, onClose, onSignUp }) => {
  const [closing, setClosing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isOpen) setClosing(false); // Reset closing state if modal reopens
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 500); // Close modal after animation
  };

  const handleSignUpClick = () => {
    if (typeof onSignUp === 'function') {
      onClose();  // Close Login modal
      onSignUp(); // Open SignUp modal
    } else {
      console.error('onSignUp is not a function');
    }
  };

  // Handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });

      toast.success(response.data.message);
      localStorage.setItem('token', response.data.token); // Save token to localStorage
      onClose(); // Close the login modal after successful login
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  if (!isOpen && !closing) return null; // Don't render if modal is not open

  return (
    <div className={`modal-overlay ${closing ? 'fade-out' : ''}`}>
      <div className="login-container modal-content">
        <div className="login-box">
          <div className="sign-up-section">
            <span className="close-button" onClick={handleClose}>&times;</span>
            <GiCoffeeBeans size={50} style={{ marginBottom: '10px' }} />
            <h1>Hello Friend!</h1>
            <p>Register now to get exclusive deals and discounts!</p>
            <button className="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
          </div>

          <div className="sign-in-section">
            <h2>Sign-in</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
