import React, {useState} from 'react';
import "./Styles/Navbar.css"; 
import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <nav>
      <br />
            {/* Navbar */}
            <div className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="Medivita-logo" className='logo-img' ></img>
                    <p className='medivita'>Medivita</p>
                </div>
                <div className="nav-menu">
                    <button>Sign in</button>
                    <button>Sign up</button>
                    <button>About Us</button>
                    <button>Contact Us</button>
                </div>
            </div>
    </nav>
  );
};

export default Navbar;
