import React, { useEffect, useState } from 'react';
import codeImage from '../Images/code.png';
import can1Image from '../Images/can1.png';
import can2Image from '../Images/can2.png';
import can3Image from '../Images/can3.png';
import rock2Image from '../Images/rock2.png';
import rock3Image from '../Images/rock3.png';
import stageImage from '../Images/stage.png';
import '../css_files/Beverages.css';

const MyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentData = [
    {
      description: 'A bold cyberpunk-inspired energy drink can with a fierce red oni mask, cybernetic eye, and flames. It promises an "Energy Boost" with Vitamin B12, and Niacin. The "Lychee-Jasmine" flavor stands out in a neon yellow font, adding a unique twist to its intense, futuristic look.',
      canImage: can1Image,
    },
    {
      description: 'This is a Cyberpunk Oshee energy drink can featuring a bold and intense design. The artwork showcases a fiery red demonic face with cybernetic elements. The drink is labeled as "ENERGY BOOST" with a bubble gum flavor and contains guarana for added energy. The striking black and red color scheme adds to its fierce, high-energy aesthetic.',
      canImage: can2Image,
    },
    {
      description: 'This can of Rockstar Recovery is a bright yellow energy and hydration drink, designed to catch the eye. With a refreshing lemonade flavor, this non-carbonated drink offers electrolytes and only 10 calories per can, providing a quick boost and hydration in one.',
      canImage: can3Image,
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
          {/* Soda products with dynamic backgrounds */}
          <div className="soda" style={{ '--url': `url(${contentData[currentIndex].canImage})` }}></div>
          <div className="soda" style={{ '--url': `url(${contentData[currentIndex].canImage})` }}></div>
        </div>

        {/* Rock images */}
        <div className="rock">
          <img src={stageImage} alt="stage" />
          <img src={rock2Image} alt="Rock 2" />
          <img src={rock3Image} alt="Rock 3" />
        </div>
      </div>

      {/* Next Arrow Button */}
      <div className="next-arrow" onClick={handleNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"  /* Keep original size */
          height="100"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
};

export default MyComponent;
