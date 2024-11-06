import React, { useState, useEffect } from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import '../css_files/Sign-up.css';
import axios from 'axios'

const SignUp = ({ isOpen, onClose, onRegisterComplete }) => {
  const [closing, setClosing] = useState(false);

  // Define state variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent form submission
    axios.post('', {name,email,password,passwordConfirm})
    .then(result => console.log(result)
    .catch(err=> console.log(err))
  )

    // Log or use the values stored in state variables
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Password Confirm:", passwordConfirm);

    // Show an alert message
    alert('Register complete'); // Display message after registration

    setTimeout(() => {
      onClose(); // Close SignUp modal
      if (typeof onRegisterComplete === 'function') { // Check if onRegisterComplete is a function
        onRegisterComplete(); // Open the Login modal
      } else {
        console.error('onRegisterComplete is not a function');
      }
    }, 500); // Adjust timing as needed
  };

  useEffect(() => {
    if (!isOpen) setClosing(false); // Reset closing state if modal reopens
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true); // Start the closing animation
    setTimeout(onClose, 500); // Close the modal after animation
  };

  if (!isOpen && !closing) return null; // Don't show modal if not open or closing

  return (
    <div className={`modal-overlay ${closing ? 'fade-out' : ''}`}>
      <div className="signup-modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <GiCoffeeBeans size={50} style={{ marginBottom: '10px' }} />
        <h1 className="signup-title">Create Account</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
          <button type="submit" className="sign-up-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
