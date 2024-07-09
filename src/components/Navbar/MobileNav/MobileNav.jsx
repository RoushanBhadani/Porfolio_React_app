import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container">
        <img className='logo' src='./assets/images/roushan-logo.png' alt='' />

        <ul>
        <li>
              <a className="menu-item" href="#home">Home</a>
            </li>
            <li>
              <a className="menu-item" href="#skills">Skills</a>
            </li>
            <li>
              <a className="menu-item" href="#work-experience">Work Experience</a>
            </li>
            <li>
              <a className="menu-item" href="#contact">Contact Me</a>
            </li>

          <button className='contact-btn' onClick={() => { }}>Hire Me</button>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav;