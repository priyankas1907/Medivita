import React from "react";
import Navbar3 from "./Navbar3";
import './Styles/ForgotPassword.css';
import forgotImg from '../Images/forgotImg.png';

const ForgotPassword = () => {
    return(
        <div> 
            <Navbar3 />
             
            {/* Body */}
            <div className='grid-container'>
                <div className='Account-section'>
                    <br /><br /><br /><br /><br /><br />
                    <center><h1>Forgot Password</h1></center>
                    <br />
                    <p className="req-text">Please enter your email to reset the password</p>
                    <p>Your Email</p>
                    <input type='text' placeholder='Enter your email' />
                    <br /><br /><br />
                    <center><button className='reset-btn'>Reset Password</button></center>
                </div>
                <div>
                    <img src={forgotImg} alt="Forgot-password-image" className="forgot-image"/>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;