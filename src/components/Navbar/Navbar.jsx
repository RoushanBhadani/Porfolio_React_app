import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavClick = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} handleNavClick={handleNavClick}/>

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="./assets/images/roushan-logo.png"
            alt="Roushan"
          />

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
              <Link className="menu-item" to="/projects">Projects</Link>
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.5rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
