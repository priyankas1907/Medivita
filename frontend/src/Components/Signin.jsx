import React, { useState } from 'react';
import './Styles/Signin.css';
import Navbar3 from './Navbar3.jsx';
import signinimage from '../Images/signinimg.png';

const Signin = () => {
    return (
        
        <div>   
            <Navbar3 />
        <div className='grid-container'>
               
                <div className='Account-section'>
                    <center><h1>Sign In </h1></center>
                    <p>SignIn Us</p>
                    <select>
                        <option>Doctor</option>
                        <option>User</option>
                        <option>Medicine Seller</option>
                    </select>
                    <p>Your Phone No.</p>
                    <input type='tel' placeholder='Enter your phone number' />
                    <p>Password</p>
                    <input type='password' placeholder='Enter strong password' /><br /><br/>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <br /><br/>
                    <center><button className='continue-btn'>Continue</button></center>
                    <p className="signup-text">
                         Don’t have an account? <a href="#">Sign up</a>
                    </p>
                </div>
                <div>
                    <img src={ signinimage} alt='Doctor-image' className='doctor-img' />
                </div>
            </div>
            </div> 
    );
};
export default Signin;