import React from "react";
import Navbar3 from "./Navbar3";
import './Styles/ResetPassword.css';
import resetImg from '../Images/resetImg.png';

const ResetPassword = () => {
    return(
        <div> 
            <Navbar3 />
             
            {/* Body */}
            <div className='grid-container'>
                <div className='Account-section'>
                    <br /><br /><br />
                    <center><h1>Reset Password</h1></center>
                    <br />
                    <p className="req-text">Create a new password. Ensure it differs from previous ones for security</p>
                    <p>Password</p>
                    <input type='password' placeholder='Enter your new password' className='input-field'/>
                    <p>Confirm Password</p>
                    <input type='password' placeholder='Re-enter the new password' className='input-field'/>
                    <br /><br /><br />
                    <center><button className='update-btn'>Update Password</button></center>
                </div>
                <div>
                    <img src={resetImg} alt="Reset-password-image" className="reset-image"/>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;