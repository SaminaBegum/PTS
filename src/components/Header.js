import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../components/log.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="My Logo" className="logo-image" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'} {/* Toggle between X and Hamburger */}
      </div>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses and Training</a></li>
          <li><a href="/services">Expertise</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/team">Team</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
