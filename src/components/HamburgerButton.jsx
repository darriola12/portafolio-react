import React, { useState } from 'react';
import './HamburgerButton.css'; 

const HamburgerButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    const navMenu = document.querySelector('.nav_menu');
    if (navMenu) {
      navMenu.classList.toggle('active');
    }
  };

  return (
    <div id="button" className={`btn ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerButton;