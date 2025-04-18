// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dail_logo-removebg-preview 4.svg'; // Adjust the path as necessary
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navbar1" style={{ backgroundColor: location.pathname === '/sign-up'  ? 'transparent' : 'black' }}>
        <Link to="/">
          <img src={logo} alt="Logo" className="logoS" onClick={scrollToHero} />
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;