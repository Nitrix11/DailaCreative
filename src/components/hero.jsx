import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import pic1 from "../assets/crpic-removebg-preview 1.png";
import logo from "../assets/DailACreative.svg";

const ConnectSection = () => {
  return (
    <div style={{ 
      backgroundColor: '#282c34', 
      color: 'white',
      textAlign: 'left',
      height: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '80px 20px', 
      position: 'relative', 
      overflow: 'hidden', 
      fontFamily: 'sans-serif' 
    }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        backgroundColor: 'white', 
        padding: '20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        zIndex: 2, 
        borderBottom: '1px solid #eee' 
      }}>
        <div style={{ color: 'black', fontWeight: 'bold' }}>
          <img src={logo} alt="Logo" />
        </div> 
        <div>{/* Add your navigation links here */}</div>
      </nav>

      <div style={{ maxWidth: '800px', margin: 'auto 0', position: 'relative', zIndex: 1 }}> 
        <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Connect with Creatives.<br />Connect with Ease.</h2>
        
        {/* Horizontal Line */}
        <hr style={{
          border: 'none',
          borderTop: '2px solid white',
          margin: '20px 0',
          width: "30%"
        }} />
        
        <p style={{ marginBottom: '30px' }}>Join Our Waiting List, fill out form below</p>
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
          <Link to="/sign-up">
            <button style={{ 
              backgroundColor: 'white', 
              color: 'black',  
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold' 
            }}>I'm Seeking A Creative</button>
          </Link>
          <Link to="/media">
          <button style={{ 
            backgroundColor: '#007bff', 
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold' 
          }}>I'm A Media Creative</button>
          </Link>
       
        </div>
      </div>
      
      <img 
        src={pic1} 
        alt="Man smiling" 
        style={{ 
          position: 'absolute', 
          right: '50px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          maxWidth: '40%', 
          borderRadius: '10px', 
          zIndex: 0 
        }} 
      />
      
      {/* Copyright Section */}
      <div style={{ 
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '1.2em',
        fontWeight: 'bold',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0
      }}>
        <p style={{ margin: 0 }}>Copyright 2025 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ConnectSection;