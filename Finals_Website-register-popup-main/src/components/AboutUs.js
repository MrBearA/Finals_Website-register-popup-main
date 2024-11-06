import React from 'react';
import LocationCard from './LocationCard'; // Import the LocationCard component
import '../css_files/AboutUs.css'; // Link to your CSS file

const locations = [
  {
    name: "Extra Hours Tokyo",
    address: "123 Oni Circuit Street Tokyo",
    description: "In the heart of cyberpunk Tokyo is a sleek, high-tech café where the city’s pulse never stops. Bathed in neon lights and electric hues, it’s a haven for insomniacs, gamers, and tech enthusiasts looking to refuel.",
    backgroundImage: require("../Images/Tokyo.jpg") // Replace with correct image path
  },
  {
    name: "Extra Hours Kyoto",
    address: "456 Chrome Blossom Street Kyoto",
    description: "A hidden gem nestled in the neon-lit streets of cyberpunk Kyoto, This late-night café blends the charm of traditional Japan with futuristic tech, offering a cozy yet edgy space for night owls and wanderers.",
    backgroundImage: require("../Images/Kyoto.jpg") // Replace with correct image path
  },
  {
    name: "Extra Hours Osaka",
    address: "103 Midnight Spectrum Alley, Osaka",
    description: "Extra Hours in Osaka is a bold fusion of cyberpunk aesthetics and local street culture. Tucked away in a neon-drenched alley, this café offers a gritty yet stylish escape from the bustling city",
    backgroundImage: require("../Images/Osaka.jpg") // Replace with correct image path
  },
  {
    name: "Extra Hours Sapporo",
    address: "241 Shiro Hive Avenue, Sapporo",
    description: "Extra Hours in Sapporo is a futuristic hideaway amidst the city's snow-covered streets. This cyberpunk-inspired café glows with icy neon lights, offering a sleek, modern space for travelers and locals alike.",
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
        Welcome to Extra Hours, where the neon glow of Tokyo’s bustling streets meets the rich aroma of freshly brewed coffee. We’re more than just a coffee shop; we’re a portal to an alternate reality—a space where technology and artistry collide, inspired by the captivating world of cyberpunk.
        </p>
        
        {/* About Us Cards */}
        <div className="cards-container">
          <div className="card">
            <h2>Our Vision</h2>
            <p>At Extra Hours, we believe that coffee is more than just a drink—it's an experience. Our vision is to create a unique haven for coffee lovers, tech enthusiasts, and dreamers alike. Drawing inspiration from the vibrant aesthetics of cyberpunk culture, our shop boasts a striking atmosphere filled with neon lights, digital art, and futuristic decor.</p>
          </div>
          <div className="card">
            <h2>Our Coffee</h2>
            <p>We source our beans from the finest local and international growers, ensuring that each cup is crafted with care and precision. Whether you crave a bold espresso, a silky latte, or a refreshing cold brew, our expert baristas are here to deliver the perfect brew tailored to your taste.</p>
          </div>
          <div className="card">
            <h2>The Experience</h2>
            <p>In addition to our exceptional coffee, Extra Hours features a cozy yet tech-forward environment. Enjoy complimentary high-speed Wi-Fi, charging stations, and immersive digital art displays as you work, socialize, or simply unwind. Join us for live music, art showcases, and themed events that transport you to another dimension.</p>
          </div>
          <div className="card">
            <h2>The Community</h2>
            <p>Located in the heart of Tokyo, we are proud to be part of a vibrant community. Extra Hours is not just a coffee shop; it’s a gathering place for artists, musicians, gamers, and creatives of all kinds. We strive to foster connections and inspire collaboration, making our space a hub for innovative ideas and creative expression.</p>
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
