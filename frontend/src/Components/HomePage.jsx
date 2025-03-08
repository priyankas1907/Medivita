import React from 'react';
import './Styles/HomePage.css';
import logo from '../Images/logo.png';
import homepageimg from '../Images/Home page image.jpg';
import doctoricon from '../Images/Doctor-icon.png';
import hearticon from '../Images/heart.png';
import consultimg from '../Images/consult-online.png';
import medicineimg from '../Images/medicine-delivery.png';
import homepageimg1 from '../Images/homepageimg1.png';
import homepageimg2 from '../Images/hompageimg2.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="Medivita-logo" className='logo-img' ></img>
                    <p className='medivita'>Medivita</p>
                </div>
                <div className="nav-menu">
                    <button>Home</button>
                    <button>My Account</button>
                    <button>About Us</button>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className='main-page'>
                <div className='main-page-content'>
                    <div className='inner-container' >
                        <img src={doctoricon} height={150} width={90} alt="Doctor-icon"></img>
                        <h1 style={{ fontSize: "38px" }}>Doctors may be miles away, but care is always close</h1>
                    </div>
                    <p style={{ marginLeft: "90px", marginTop: "20px" }}>Bringing medical expertise to remote areas through telemedicine, mobile clinics, and community healthcare.<br></br> No distance is too far when it comes to saving lives.</p>
                    <div className='inner-container1'>
                        <button className="care-btn">Get Care Now</button>
                        <img src={hearticon} alt="Heart-image" style={{ marginLeft: "40px", height: "70px", width: "70px" }}></img>
                    </div>
                </div>
                <div className='main-page-image'>
                    <img src={homepageimg} height={450} width={500} alt="Homepage-image"></img>
                </div>
            </div>
            <div className="container">
                <div className="section2">
                    <img src={consultimg} alt="consult-doctor image" height={300} width={500}></img>
                    <div className="inner-section2">
                        <h2 style={{ marginLeft: '150px', color: 'white' }}>Consult Doctor</h2>
                        <h4 style={{ marginLeft: '65px', color: '#E1AFD1' }}>Consult Top Doctors From Anywhere, Anytime</h4>
                        <h3>1. Expert Medical Advice at Your Fingertips from Renowned
                            Specialists and Doctors.<br></br>
                            2.Consult Top Doctors from Anywhere, Anytime, and Get
                            Personalized Medical Guidance.</h3>
                        <button className='care-btn' style={{ width: '240px',marginLeft:'160px' }}>Book an Appointment</button>
                    </div>
                </div>
                <div className="section3">
                    <div className="inner-section3">
                        <h2 style={{ marginLeft: '150px', color: 'white' }}> Delivery</h2>
                        <h4 style={{ marginLeft: '65px', color: '#E1AFD1' }}>Get Your Meds Delivered Right To Your Door</h4>
                        <h3>1.  Fast, Reliable, and Convenient Delivery of Medications
                            Right to Your Doorstep.<br></br>
                            2. Get Your Medications Delivered Quickly and
                            Efficiently with Our Logistics Partners.</h3>
                        <button className='care-btn' style={{ marginLeft:'200px' }}>Order Now</button>
                    </div>
                    <img src={medicineimg} alt="medicine-delivery image" height={300} width={500} ></img>
                </div>
            </div>
            <div className="container1">
                <div className="section2">
                    <img src={homepageimg1} alt="home page image1" height={300} width={500}></img>
                    <div className="inner-section2">
                        <h2 style={{ marginLeft: '150px', color: 'white' }}>Consult Doctor</h2>
                        <h4 style={{ marginLeft: '65px', color: '#E1AFD1' }}>Consult Top Doctors From Anywhere, Anytime</h4>
                        <h3>1. Expert Medical Advice at Your Fingertips from Renowned
                            Specialists and Doctors.<br></br>
                            2.Consult Top Doctors from Anywhere, Anytime, and Get
                            Personalized Medical Guidance.</h3>
                        <button className='care-btn' style={{ width: '240px',marginLeft:'160px' }}>Book an Appointment</button>
                    </div>
                </div>
                <div className="section3">
                    <div className="inner-section3">
                        <h2 style={{ marginLeft: '150px', color: 'white' }}> Delivery</h2>
                        <h4 style={{ marginLeft: '65px', color: '#E1AFD1' }}>Get Your Meds Delivered Right To Your Door</h4>
                        <h3>1.  Fast, Reliable, and Convenient Delivery of Medications
                            Right to Your Doorstep.<br></br>
                            2. Get Your Medications Delivered Quickly and
                            Efficiently with Our Logistics Partners.</h3>
                        <button className='care-btn' style={{ marginLeft:'200px' }}>Order Now</button>
                    </div>
                    <img src={homepageimg2} alt="home page image 2" height={300} width={500} ></img>
                </div>
            </div>
        </div>
    );
};

export default HomePage;