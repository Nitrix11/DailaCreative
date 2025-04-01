
import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from "../assets/Group 2.png";
import logo from "../assets/dail_logo-removebg-preview 4.svg";


const ConnectSection = () => {
  return (
    <div id="hero">
      {/* Navigation */}
      <div className="nav-container">
        <h2>Connect with Creatives.<br />Connect with Ease.</h2>
        <p className="description">Dial-a-Creative instantly connects you with top creatives for in-person or remote projects. Get high-quality work, fast and hassle-free, with AI-powered project management.</p>
        {/* Horizontal Line */}
        <hr className="horizontal-line" />
        <p className="join-list">Join Our Waiting List, fill out form below</p>
        <div className="button-container">
          <Link to="/sign-up">
            <button className="button">I'm Seeking A Creative</button>
          </Link>
          <Link to="/media">
            <button className="button orange">I'm A Media Creative</button>
          </Link>
        </div>
      </div>
      <img className="pic1" src={pic1} alt="Man smiling" />
      {/* Copyright Section */}
      <div className="copyright-section">
        <p>Copyright 2025 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ConnectSection;
