// src/components/CustomNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';  // Import the user icon
import Login from './Login';  // Import the Login modal component
import '../css_files/Navbar.css'; // Ensure the correct import

const CustomNavbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);  // Open the modal
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);  // Close the modal
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="nav-left"> {/* Left-aligned links */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/beverages">Beverages</Nav.Link>
            <Nav.Link as={Link} to="/pastries">Pastries</Nav.Link>
            <Nav.Link as={Link} to="/merchandise">Merchandise</Nav.Link>
          </Nav>
          <Nav className="nav-right"> {/* Right-aligned link */}
            <Nav.Link onClick={handleLoginClick}>
              <FaUser size={20} /> {/* User icon to trigger the login popup */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* The Login modal is conditionally rendered based on the state */}
      <Login isOpen={isLoginOpen} onClose={handleCloseLogin} />
    </>
  );
};

export default CustomNavbar;
