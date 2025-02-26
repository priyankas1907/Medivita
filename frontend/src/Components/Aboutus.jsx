import React from 'react';
import './Styles/Aboutus.css'
import aboutusimg from '../Images/aboutusimage 2.png'
import chatbotImg from '../Images/aboutai.png'
import doctorsImg from '../Images/aboutcontactdoc.png'
import educationImg from '../Images/aboutedu.png'
import Navbar from './Navbar';

const Aboutus = () => {
    return (
        <div className="landing-page">
            <Navbar />

            <div className="about-container">
                <div className="about-content">
                    <h1><b>Healing with <br/> Expertise, Caring <br/> with  Heart</b></h1>
                    <p>Providing advanced healthcare <br/> with compassion and trust</p>
                    <button className="read-more">Read More</button>
                </div>
                <div className="about-image">
                    <img src={aboutusimg} alt="aboutusimg" />
                </div>
            </div>

            <div className="whymedivita">
                <p>Why Medivita?</p>
            </div>

            <div className="feature-container">
                <div className="feature-card">
                    <img src={chatbotImg} alt="Chatbot Assistance" />
                    <p>AI Powered Chatbot <br /> for Medical Assistance</p>
                </div>
                <div className="feature-card">
                    <img src={doctorsImg} alt="Connect with Doctors" />
                    <p>Connect with Doctors</p>
                </div>
                <div className="feature-card">
                    <img src={educationImg} alt="Health Education" />
                    <p>Health Education<br /> and Awareness</p>
                </div>
            </div>
            
        </div>
    );
};

export default Aboutus;