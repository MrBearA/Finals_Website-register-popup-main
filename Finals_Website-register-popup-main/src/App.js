import React, { useState } from 'react';
import './css_files/App.css'; // Global styles
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './components/Navbar'; 
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/Sign-up';
import Beverages from './components/Beverages';
import Pastries from './components/Pastries';
import Merchandise from './components/Merchandise';
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const [glitch, setGlitch] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleEnterCafeClick = () => {
    setGlitch(true);
    setTimeout(() => {
      setGlitch(false);
    }, 500); 
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <div className={`app ${glitch ? 'glitch' : ''}`}>
      <CustomNavbar />
      <div className="centered-container">
        <Routes location={location}>
          <Route path="/" element={<Home onEnterCafeClick={handleEnterCafeClick} />} />
          <Route 
            path="/login" 
            element={<Login isOpen={isLoginOpen} onClose={closeModals} onSignUp={openSignUp} />} 
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/item/:id" element={<ProductDetail />} /> {/* Route for product details */}
        </Routes>
      </div> 

      {/* Login and SignUp modals */}
      {isSignUpOpen && (
        <SignUp isOpen={isSignUpOpen} onClose={closeModals} onRegisterComplete={openLogin} />
      )}
      {isLoginOpen && (
        <Login isOpen={isLoginOpen} onClose={closeModals} onSignUp={openSignUp} />
      )}

      <ToastContainer />
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
