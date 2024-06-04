import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaAngleDown } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ cartItemsCount }) {
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
        <ScrollLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Happy Baking</ScrollLink>
        <ScrollLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</ScrollLink>
        <div className="dropdown">
          <span className="dropdown-link">Shop <FaAngleDown className="angle-down-icon" /></span>
          <div className="dropdown-content">
            <RouterLink to='/package'>Packaging</RouterLink>
            <ScrollLink to='prod2' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Paints,Colors & Sprays</ScrollLink>
            <ScrollLink to='prod3' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tools and Cutter</ScrollLink>
            <ScrollLink to='prod4' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sprinkles</ScrollLink>
            <ScrollLink to='prod5' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Equipments</ScrollLink>
            <ScrollLink to='prod6' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Toppers</ScrollLink>
          </div>
        </div>
        <ScrollLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</ScrollLink>
      </nav>
      <div className="right-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><FaSearch /></button>
        </div>
        <button className="icon-button"><FaUser /></button>
        <button className="icon-button"><FaShoppingCart /> 
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </button> 
        <button className="icon-button"><FaShoppingCart /> 
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </button> 
      </div>
    </div>
  );
}

export default Navbar;
