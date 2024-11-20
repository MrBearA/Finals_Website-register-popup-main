import React from 'react';
import LocationCard from './LocationCard'; // Import the LocationCard component
import '../css_files/AboutUs.css'; // Link to your CSS file

const locations = [
  {
    name: "Extra Hours Tokyo",
    address: "123 Oni Circuit Street Tokyo",
    description: "In the heart of cyberpunk Tokyo, there’s an energy drink that fuels the city’s restless spirit. Bathed in neon lights and electric hues, this high-octane beverage is a favorite among insomniacs, gamers, and tech enthusiasts. It’s more than just a drink; it’s a shot of pure adrenaline",
    backgroundImage: require("../Images/Tokyo.jpg") // Replace with correct image path
  },
  {
    name: "Extra Hours Kyoto",
    address: "456 Chrome Blossom Street Kyoto",
    description: "A hidden gem nestled in the neon-lit streets of cyberpunk Kyoto, this energy drink captures the perfect blend of traditional Japanese charm and futuristic edge. Crafted for night owls and wanderers, it’s a bold fusion of flavors that awakens the senses and fuels late-night adventures.",
    backgroundImage: require("../Images/Kyoto.jpg") // Replace with correct image path
  },
  {
    name: "Extra Hours Osaka",
    address: "103 Midnight Spectrum Alley, Osaka",
    description: "Extra Hours is a bold, cyberpunk-inspired café in the heart of Osaka, blending neon-lit aesthetics with the city’s vibrant street culture. Tucked away in a hidden alley, this gritty yet stylish spot offers a haven for night owls and urban explorers. Known for its exclusive, high-energy drinks.",
    backgroundImage: require("../Images/Osaka.jpg") // Replace with correct image path
  },
  {
    name: "Extra Hours Sapporo",
    address: "241 Shiro Hive Avenue, Sapporo",
    description: "Extra Hours in Sapporo is a cutting-edge shop that offers a signature energy drink inspired by the city’s cyberpunk vibes. Nestled amidst the neon-covered streets, this futuristic hideaway serves up a vibrant, neon-colored energy drink that packs a punch.",
    backgroundImage: require("../Images/Sapporo.jpg") // Replace with correct image path
  },

];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="AboutUs-title">About Us</h1>
        <p>
        Welcome to Extra Hours, where the neon glow of Tokyo’s bustling streets meets the electrifying buzz of our signature energy drinks. We’re more than just a drink shop; we’re a gateway to a new realm of energy and innovation—a space where technology and flavor collide, inspired by the bold, futuristic world of cyberpunk.
        </p>
        
        {/* About Us Cards */}
        <div className="cards-container">
          <div className="card">
            <h2>Our Vision</h2>
            <p>At Extra Hours, we believe that energy drinks are more than just a boost—they’re an experience. Our vision is to create a unique haven for those seeking energy, adventure, and innovation. Inspired by the vibrant aesthetics of cyberpunk culture, our shop offers a selection of electrifying energy drinks designed to fuel both your body and your imagination.</p>
          </div>
          <div className="card">
            <h2>Our Drinks</h2>
            <p>At Extra Hours, we source the finest ingredients to create our energy drinks, ensuring each one delivers the perfect balance of flavor and power. Whether you’re craving a refreshing citrus blast, a bold berry kick, or a smooth, invigorating blend, our expertly crafted drinks are designed to energize and satisfy.</p>
          </div>
          <div className="card">
            <h2>The Experience</h2>
            <p>In addition to our exceptional energy drinks, Extra Hours offers a dynamic, tech-forward environment designed to keep you charged up and inspired. Enjoy complimentary high-speed Wi-Fi, charging stations, and immersive digital art displays as you work, socialize, or take a moment to recharge. Join us for live music, art showcases, and themed events that transport you into the future.</p>
          </div>
          <div className="card">
            <h2>The Community</h2>
            <p>Located in the heart of Tokyo, Extra Hours is proud to be part of a vibrant community. We’re not just an energy drink shop; we’re a gathering place for artists, musicians, gamers, and creatives of all kinds. Our space is designed to foster connections, spark collaboration, and inspire new ideas.</p>
          </div>
        </div>

        {/* Store Locations Section */}
        <h1 className="store-locations-title">Store Locations</h1>
        <div className="location-cards-container">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
