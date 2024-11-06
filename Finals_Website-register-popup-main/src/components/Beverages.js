import React, { useEffect } from 'react';
import img2 from '../Images/2.png'; // Adjust paths accordingly
import codeImage from '../Images/code.png';
import bgImage from '../Images/bg.png';
import bg2Image from '../Images/bg2.png';
import rock1Image from '../Images/rock1.png';
import rock2Image from '../Images/rock2.png';
import rock3Image from '../Images/rock3.png';
import '../css_files/Beverages.css'; // Assuming you're using the same CSS

const MyComponent = () => {
  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('drinks-page');

    // Cleanup the class when the component unmounts
    return () => {
      document.body.classList.remove('drinks-page');
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="left">
          <h1>DRINKS</h1>
          <img src={img2} alt="2" />
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
          <div className="soda" style={{ '--url': `url(${bgImage})` }}></div>
          <div className="soda" style={{ '--url': `url(${bg2Image})` }}></div>
        </div>

        {/* Rock images */}
        <div className="rock">
          <img src={rock1Image} alt="Rock 1" />
          <img src={rock2Image} alt="Rock 2" />
          <img src={rock3Image} alt="Rock 3" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
