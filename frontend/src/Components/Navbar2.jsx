import React, {useState} from 'react';
import "./Styles/Navbar2.css"; 
import logo from '../Images/logo.png';
import { Link } from "react-router-dom";

const Navbar2 = () => {
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
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/'><button>My Account</button></Link>
                    <Link to='/about'><button>About Us</button></Link>
                    <Link to='/Contactus'><button>Contact Us</button></Link>
                </div>
            </div>
    </nav>
  );
};

export default Navbar2;
