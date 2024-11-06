import React from 'react';
import img2 from '../Images/2.png'; // Adjust paths accordingly
import codeImage from '../Images/code.png';
import bgImage from '../Images/bg.png';
import bg2Image from '../Images/bg2.png';
import rock1Image from '../Images/rock1.png';
import rock2Image from '../Images/rock2.png';
import rock3Image from '../Images/rock3.png';
import '../css_files/Beverages.css'; // Assuming you're using the same CSS

const MyComponent = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="left">
          <h1>CSS ONLY</h1>
          <img src={img2} alt="2" />
        </div>
        <div className="author">
          <h3>LUN DEV</h3>
          <div>
            <p>Design By</p>
            <p>Lun Dev</p>
          </div>
          <div>
            <p>Code By</p>
            <p>Lun Dev</p>
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
