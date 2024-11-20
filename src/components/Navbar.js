import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';  // Import the user icon
import Login from './Login';  // Import the Login modal component
import SignUp from './Sign-up';  // Import the SignUp modal component
import '../css_files/Navbar.css'; // Ensure the correct import

const CustomNavbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false); // State to control SignUp modal

  const handleLoginClick = () => {
    setLoginOpen(true);  // Open the Login modal
  };

  const handleSignUpClick = () => {
    setSignUpOpen(true);  // Open the SignUp modal directly from Navbar
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);  // Close the Login modal
  };

  const handleCloseSignUp = () => {
    setSignUpOpen(false);  // Close the SignUp modal
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="nav-left"> {/* Left-aligned links */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/beverages">Beverages</Nav.Link>
            <Nav.Link as={Link} to="/merchandise">Merchandise</Nav.Link>
          </Nav>
          <Nav className="nav-right"> {/* Right-aligned link */}
            <Nav.Link onClick={handleLoginClick}>
              <FaUser size={20} /> {/* User icon to trigger the login popup */}
            </Nav.Link>
            {/* Hide the SignUp link by commenting it out or removing it */}
            {/* <Nav.Link onClick={handleSignUpClick}>Sign Up</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* Modals for Login and Sign Up */}
      <Login isOpen={isLoginOpen} onClose={handleCloseLogin} onSignUp={handleSignUpClick} />
      <SignUp isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
    </>
  );
};

export default CustomNavbar;
