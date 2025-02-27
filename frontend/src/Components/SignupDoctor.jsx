import React, {useState} from 'react';
import './Styles/SignupDoctor.css';
import Navbar3 from './Navbar3.jsx';
import DoctorImg from '../Images/DoctorImg.png';

const SignupDoctor = () => {
    return(
        <div>
            {/* Navbar */}
            <Navbar3 />

            {/* body */}
            <div className='grid-container'>
                <div className='Account-section'>
                    <center><h1>Sign Up</h1></center>
                    <p>Your Name</p>
                    <input type='text' placeholder='Enter your name' />
                    <p>Your Phone No.</p>
                    <input type='tel' placeholder='Enter your phone number' />
                    <p>Password</p>
                    <input type='password' placeholder='Enter strong password' />
                    <p>Confirm Password</p>
                    <input type='password' placeholder='Enter your password again' /><br /><br />
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