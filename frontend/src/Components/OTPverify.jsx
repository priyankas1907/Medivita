import React from "react";
import Navbar3 from "./Navbar3";
import './Styles/OTPverify.css';
import otpImg from '../Images/otpImg.png';

const OTPverify = () => {
    return(
        <div> 
            <Navbar3 />
             
            {/* Body */}
            <div className='grid-container'>
                <div className='Account-section'>
                    <br /><br /><br />
                    <center><h1>OTP verification</h1></center>
                    <br />
                    <p>Check your email</p>
                    <p className="req-text">We sent a reset link to contact@dscode...com enter 5 digit code that mentioned in the email</p>
                    <br />
                    <div className="input-container">
                        <input type="text" maxLength="1" className='input-field' />
                        <input type="text" maxLength="1" className='input-field' />
                        <input type="text" maxLength="1" className='input-field' />
                        <input type="text" maxLength="1" className='input-field' />
                        <input type="text" maxLength="1" className='input-field' />
                        <input type="text" maxLength="1" className='input-field' />
                    </div>
                    <br /><br />
                    <center><button className='OTPverify-btn'>Verify Code</button></center>
                    <p>
                        <span className="otp-notreceived">Haven’t got the email yet? </span>
                        <span className="resend-otp">Resend OTP</span>
                    </p>
                </div>
                <div>
                    <img src={otpImg} alt="OTP-image" className="otp-image"/>
                </div>
            </div>
        </div>
    );
};

export default OTPverify;