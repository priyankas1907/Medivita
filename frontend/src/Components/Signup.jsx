import React, {useState} from 'react';
import './Styles/Signup.css';
import Navbar3 from './Navbar3.jsx';
import signupImg1 from '../Images/signupImg1.jpeg';
import signupImg2 from '../Images/signupImg2.png';
import signupImg3 from '../Images/signupimg3.jpg';
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <div>
            {/* Navbar */}
            <Navbar3 />

            {/* body */}
            <div className='flex-container'>
                <Link to='/SignupDoctor'>
                    <div className='doctor-div'>
                        <center><br />
                            <h2>Sign Up as Doctor</h2><br />
                            <img src={signupImg1} alt='Doctor-image' className='doctor-image'/>
                        </center>
                    </div>
                </Link>
                <Link to='/SignupMedSeller'>
                    <div className='medseller-div'>
                        <center><br />
                            <h2>Sign Up as Medicine Seller</h2><br />
                            <img src={signupImg2} alt='Medicine-Seller-image' className='medseller-image'/>
                        </center>
                    </div>
                </Link>
                <Link to='/SignupUser'>
                    <div className='user-div'>
                        <center><br />
                            <h2>Sign Up as User</h2>
                            <img src={signupImg3} alt='User-image' className='user-image'/>
                        </center>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Signup;