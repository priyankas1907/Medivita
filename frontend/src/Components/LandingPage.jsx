import React from 'react';
import './Styles/LandingPage.css';
import logo from '../Images/logo.png';

const LandingPage = () => {
    return(
        <div className="landing-page">
            <br />
            <div className='navbar'>
                <img src={logo} alt='logo' className='logo-img'/>
                <p className='web-name'>Medivita</p>
                <div>
                    <button className='sign-in'>Sign in</button>
                    <button className='sign-up'>Sign up</button>
                    <button className='about-us'>About Us</button>
                    <button className='contact-us'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;