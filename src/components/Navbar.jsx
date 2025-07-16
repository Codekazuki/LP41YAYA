import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src='/logo1.png' alt='Logo 1' />
          <img src='/logo2.png' alt='Logo 2' />
        </div>
        <div className='navbar-links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
