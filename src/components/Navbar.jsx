import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import { FaSearch, FaUser, FaShoppingCart, FaAngleDown } from 'react-icons/fa'; // Import icons from react-icons
import './Navbar.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="bar">
      <div className="burger-icon" onClick={toggleNav}>
        <div className={`bar1 ${showNav ? 'change' : ''}`}></div>
        <div className={`bar2 ${showNav ? 'change' : ''}`}></div>
        <div className={`bar3 ${showNav ? 'change' : ''}`}></div>
      </div>
      <nav className={`nav-links ${showNav ? 'show' : ''}`}>
        <Link to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Happy Baking</Link>
        <Link to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</Link>
        <div className="dropdown">
          <span className="dropdown-link">Shop <FaAngleDown className="angle-down-icon" /></span>
          <div className="dropdown-content">
            <Link to='prod1' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Packaging</Link>
            <Link to='prod2' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Paints,Colors & Sprays</Link>
            <Link to='prod3' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tools and Cutter</Link>
            <Link to='prod4' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sprinkles</Link>
            <Link to='prod5' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Equipments</Link>
            <Link to='prod6' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Toppers</Link>
          </div>
        </div>
        <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</Link>
      </nav>
      <div className="right-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><FaSearch /></button>
        </div>
        <button className="icon-button"><FaUser /></button>
        <button className="icon-button"><FaShoppingCart /></button>
        <button className="icon-button"><FaShoppingCart /></button>
      </div>
    </div>
  );
}

export default Navbar;
