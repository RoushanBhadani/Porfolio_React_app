import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu, handleNavClick }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img className="logo" src="./assets/images/roushan-logo.png" alt="" />

        <ul>
            <li>
              <span
                className="menu-item"
                onClick={() => handleNavClick("home")}
              >
                Home
              </span>
            </li>
            <li>
              <span
                className="menu-item"
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </span>
            </li>
            <li>
              <span
                className="menu-item"
                onClick={() => handleNavClick("work-experience")}
              >
                Work Experience
              </span>
            </li>
            <li>
              <Link className="menu-item" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <span
                className="menu-item"
                onClick={() => handleNavClick("contact")}
              >
                Contact Me
              </span>
            </li>

            <button
              className="contact-btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/resume/RoushanBhadaniResume.pdf";
                link.download = "Roushan_Resume.pdf";
                link.click();
              }}
            >
              Resume
            </button>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
      </div>
    </div>
  );
};

export default MobileNav;
