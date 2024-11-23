import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import Login from './Login';
import codeImage from '../Images/code.png';
import can1Image from '../Images/can1.png';
import can2Image from '../Images/can2.png';
import can3Image from '../Images/can3.png';
import can4Image from '../Images/can4.png';
import can5Image from '../Images/can5.png';
import can6Image from '../Images/can6.png';
import can7Image from '../Images/can7.png';
import can8Image from '../Images/can8.png';
import can9Image from '../Images/can9.png';
import can10Image from '../Images/can10.png';
import rock2Image from '../Images/rock2.png';
import rock3Image from '../Images/rock3.png';
import stageImage from '../Images/stage.png';
import '../css_files/Beverages.css';

const MyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  
  const isLoggedIn = localStorage.getItem('userName') !== null;

  const contentData = [
    {
      description: 'Step into a futuristic world of energy with OSHEE Cyberpunk Lychee-Jasmine — a refreshing twist on traditional energy drinks. Featuring a captivating blend of lychee and jasmine flavors, this drink brings a unique and exotic taste that’s as daring as the bold black and yellow can it’s packed in.',
      canImage: can1Image,
    },
    {
      description: 'Unleash the electrifying energy of OSHEE Cyberpunk — the ultimate energy drink designed to fuel your inner cyberpunk warrior. With a bold and daring design inspired by the futuristic world of Cyberpunk 2077, this drink brings the energy you need to conquer the day with style. Packed with guarana for that extra kick and a sweet, nostalgic bubble gum flavor.',
      canImage: can2Image,
    },
    {
      description: 'This can of Rockstar Recovery is a bright yellow energy and hydration drink, designed to catch the eye. With a refreshing lemonade flavor, this non-carbonated drink offers electrolytes and only 10 calories per can, providing a quick boost and hydration in one.',
      canImage: can3Image,
    },
    {
      description: 'Unleash your energy with Rockstar Hardcore Apple! Packed in a sleek black can with bold green accents, this drink is designed for those who push limits. The tangy, crisp apple flavor hits hard, while the electrifying graphics reflect the intensity you crave.',
      canImage: can4Image,
    },
    {
      description: 'Get ready to ignite your day with Rockstar Energy Boom – Whipped & Orange! This vibrant can, wrapped in striking orange and yellow with bold black graphics, stands out as much as the bold taste inside. "BOOM" hits hard with creamy, whipped orange flavor and just the right amount of kick to keep you going.',
      canImage: can5Image,
    },
    {
      description: 'Power up with Rockstar XDURANCE – Blue Raz! This electrifying energy drink features a bold starburst design in vibrant purple and blue, signaling the burst of flavor and fuel inside. With the intense taste of Blue Raz and an energy blend crafted to keep you going, this drink is a must-have for those who push boundaries.',
      canImage: can6Image,
    },
    {
      description: 'Unleash unstoppable energy with C4 Ultimate Energy – WWE Edition! This sleek black can with bold metallic "C4" branding and gold accents is crafted for champions. Packed with the powerful "3X Tri-Stim Experience" and zero sugar, it delivers intense energy without compromise. Show your strength with the exclusive WWE logo and conquer every challenge in or out of the ring.',
      canImage: can7Image,
    },
    {
      description: 'Power up with PewDiePie Energy Drink – the ultimate fuel for fans and gamers alike! This bold red can, with eye-catching black and white design, is packed with intense flavor and energy to keep you going. With zero calories and a unique blend of natural and artificial flavors, PewDiePie Energy Drink gives you the boost you need to conquer anything, from gaming marathons to daily challenges.',
      canImage: can8Image,
    },
    {
      description: 'Introducing the Sour Chug Rug Energy Drink – an electrifying burst of sour and sweet crafted to fuel your wildest adventures! This bold energy drink brings a rush of power with every sip, wrapped in a can as eye-catching as it is delicious.',
      canImage: can9Image,
    },
    {
      description: 'Fuel up like a hero with GFUEL Sonic the Hedgehog Peach Rings — the ultimate energy drink inspired by the iconic blue blur himself! With every 16 oz can, you will experience the sweet, juicy flavor of peach rings blended into an energizing formula designed to give you that extra boost when you need it most.',
      canImage: can10Image,
    },
  ];

  useEffect(() => {
    document.body.classList.add('drinks-page');
    return () => {
      document.body.classList.remove('drinks-page');
    };
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handleAddToCart = (item) => {
    if (isLoggedIn) {
      setCart((prevCart) => [...prevCart, item]);
    } else {
      setShowLoginPrompt(true);
      setTimeout(() => setShowLoginPrompt(false), 3000);
      setLoginOpen(true);
    }
  };

  const handleLoginSuccess = (name) => {
    setLoginOpen(false);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="left">
          <h1>DRINKS</h1>
          <p className="left-text">
            {contentData[currentIndex].description}
          </p>
        </div>
        <div className="author">
          <h3>OUR MENU</h3>
          <div>
            <p>EXTRA</p>
            <p>HOURS</p>
          </div>
          <div>
            <p>DRINKS</p>
            <p>CATALOGUE</p>
          </div>
          <img src={codeImage} alt="Code" />
        </div>
      </header>

      {/* Banner Section */}
      <div className="banner">
        <div className="product">
          <div className="soda" style={{ '--url': `url(${contentData[currentIndex].canImage})` }}></div>
          <div className="soda" style={{ '--url': `url(${contentData[currentIndex].canImage})` }}></div>
        </div>

        <div className="rock">
          <img src={stageImage} alt="stage" />
          <img src={rock2Image} alt="Rock 2" />
          <img src={rock3Image} alt="Rock 3" />
        </div>
      </div>

      {/* Next Arrow Button */}
      <div className="next-arrow" onClick={handleNextClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6l6 6-6 6" />
        </svg>
      </div>

      {/* Product Cards */}
      <div className="product-cards">
        {contentData.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.canImage} alt={`Can ${index + 1}`} />
            <button 
              className={`add-to-cart-btn ${!isLoggedIn ? 'disabled' : ''}`} 
              onClick={() => handleAddToCart(`Can ${index + 1}`)}
            >
              {isLoggedIn ? (
                <span className="plus-icon">+</span>
              ) : (
                <FaLock className="lock-icon" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Login Prompt */}
      {showLoginPrompt && (
        <div className="login-prompt">
          Please login to add items to cart
        </div>
      )}

      {/* Floating Cart */}
      <div className="floating-cart">
        <h3>Your Cart</h3>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              {item} <span className="remove-item" onClick={() => removeFromCart(index)}>Remove</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Login Modal */}
      <Login 
        isOpen={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        onSignUp={() => {}}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default MyComponent;
