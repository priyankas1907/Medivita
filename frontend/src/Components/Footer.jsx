import React from "react";
import "./Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Medivita</h2>
          <p className="p1">
            Your Health, Our Priority. We Offer Online Delivery, Consultation, And Care, Because Your Well-Being Matters.
          </p>
          <p className="p2"> 2025 @MEDIVITA ALL RIGHTS RESERVED.</p>
          <p className="p3">PRIVACY POLICY | ACCESSIBILITY</p>
        </div>
        
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Terms</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Educational</li>
            <li>Medication Guides</li>
            <li>Nutrition</li>
            <li>Mental Health Resources</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p className="p4">📞 123-456-7890</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
