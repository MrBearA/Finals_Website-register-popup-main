import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';  // Import the user icon
import Login from './Login';  // Import the Login modal component
import SignUp from './Sign-up';  // Import the SignUp modal component
import '../css_files/Navbar.css'; // Ensure the correct import

const CustomNavbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleSignUpClick = () => {
    setSignUpOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };

  const handleCloseSignUp = () => {
    setSignUpOpen(false);
  };

  const handleLoginSuccess = (name) => {
    setUserName(name);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setUserName('');
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="nav-left">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/beverages">Beverages</Nav.Link>
            <Nav.Link as={Link} to="/merchandise">Merchandise</Nav.Link>
          </Nav>
          <Nav className="nav-right">
            <div className="user-section">
              {userName && (
                <div className="user-dropdown">
                  <div className="cyberpunk-username" onClick={toggleDropdown}>
                    <FaUser size={16} className="user-icon" />
                    <span>{userName}</span>
                  </div>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                  )}
                </div>
              )}
              {!userName && (
                <Nav.Link onClick={handleLoginClick}>
                  <FaUser size={20} />
                </Nav.Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Login 
        isOpen={isLoginOpen} 
        onClose={handleCloseLogin} 
        onSignUp={handleSignUpClick}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignUp isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
    </>
  );
}

export default CustomNavbar;
