// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dail_logo-removebg-preview 4.svg'; // Adjust the path as necessary

const Layout = ({ children }) => {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logoS" onClick={scrollToHero} />
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;