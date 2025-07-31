import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
// import { BrowserRouter, Route, Routes, useNavigate, Link } from 'react-router-dom';
// import Hero from '../Hero/Hero';
// import Skills from '../Skills/Skills';
// import WorkExperience from '../WorkExperience/WorkExperience';
// import ContactMe from '../ContactMe/ContactMe';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // const navigate = useNavigate()
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // function openContactForm(){
  //   navigate('/contact')
  // }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src="./assets/images/roushan-logo.png" alt='Roushan' />

          {/* <BrowserRouter> */}
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
            <button className='contact-btn' onClick={() => {}}>Hire Me</button>
          </ul>
          {/* <Routes>
            <Route path='/home' element={<Hero/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/work-experience' element={<WorkExperience/>}></Route>
            <Route path='/contact' element={<ContactMe/>}></Route>
          </Routes>
          </BrowserRouter> */}

         

          <button className='menu-btn' onClick={toggleMenu}>
            <span className='material-symbols-outlined' style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
