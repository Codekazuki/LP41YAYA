import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo1 from "../assets/rccg-logo.png";
import logo2 from "../assets/rccg-logo-2.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={logo1} alt='RCCG Logo' />
          <img src={logo2} alt='RCCG Logo 2' />
        </div>
        <div className='navbar-links'>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
