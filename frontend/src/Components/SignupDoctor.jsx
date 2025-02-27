import React, {useState} from 'react';
import './Styles/SignupDoctor.css';
import Navbar from './Navbar.jsx';
import DoctorImg from '../Images/DoctorImg.png';

const SignupDoctor = () => {
    return(
        <div>
            {/* Navbar */}
            <Navbar />

            {/* body */}
            <div className='grid-container'>
                <div className='Account-section'>
                    <center><h1>Sign Up</h1></center>
                    <p>Your Name</p>
                    <input type='text' placeholder='Enter your name' />
                    <p>Your Phone No.</p>
                    <input type='number' placeholder='Enter your phone number' />
                    <p>Password</p>
                    <input type='text' placeholder='Enter strong password' />
                    <p>Confirm Password</p>
                    <input type='text' placeholder='Enter your password again' /><br /><br />
                    <center><button className='signup-btn'>Sign Up</button></center>
                </div>
                <div>
                    <img src={DoctorImg} alt='Doctor-image' className='doctor-img' />
                </div>
            </div>
        </div>
    );
};

export default SignupDoctor;