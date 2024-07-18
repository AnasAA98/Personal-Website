import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeNavBar = (e) => {
    if (isOpen && !e.target.closest('.navbar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    document.addEventListener('click', closeNavBar);
    return () => {
      document.removeEventListener('click', closeNavBar);
    };
  }, [isOpen]);

  return (
    <div>
      <button className="nav-toggle" onClick={toggleNavBar}>
        <img src="/Icons/Menu-icon-pixel.png" alt="Menu Icon" />
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleNavBar}><img src="/Icons/Home-Navbar.png" alt="Home" /></Link></li>
          <li><Link to="/projects" onClick={toggleNavBar}><img src="/Icons/Projetcs-navbar.png" alt="Projects" /></Link></li>
          <li><Link to="/experience" onClick={toggleNavBar}><img src="/Icons/Experience-Navbar.png" alt="Experience" /></Link></li>
          <li><Link to="/my-skills" onClick={toggleNavBar}><img src="/Icons/My-Skills-Navbar.png" alt="My Skills" /></Link></li>
          <li><Link to="/contact" onClick={toggleNavBar}><img src="/Icons/Contact-me -navbar.png" alt="Contact Me" /></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
