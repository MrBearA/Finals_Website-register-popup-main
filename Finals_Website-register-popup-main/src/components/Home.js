import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/Home.css'; // Link to your CSS file

const Home = ({ onEnterCafeClick }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "EXTRA HOURS";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)); // Update text to display
      index += 1;
      if (index === fullText.length) {
        clearInterval(intervalId); // Clear interval when done
      }
    }, 200); // Adjust typing speed here

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [fullText]);

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="main-title">{displayedText}</h1>
        <h2 className="sub-title">A CYBERPUNK THEMED CAFE BASED IN THE HEART OF JAPAN</h2>
        <Link to="/about-us" onClick={onEnterCafeClick}> {/* Trigger glitch effect on click */}
          <button className="enter-button">ENTER CAFE!!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
