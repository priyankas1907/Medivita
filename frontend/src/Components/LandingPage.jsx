import React, {useState} from 'react';
import './Styles/LandingPage.css';
import logo from '../Images/logo.png';
import homeImg from '../Images/ldpg-img.png';
import heart from '../Images/heart.png';
import partner1 from '../Images/partner1.png';
import partner2 from '../Images/partner2.png';
import partner3 from '../Images/partner3.png';
import partner4 from '../Images/partner4.png';
import arrowImg from '../Images/arrow.png';

const LandingPage = () => {

    const faqData = [
        {
            question: "What is Medivita?",
            answer: "Medivita is a healthcare platform that provides a convenient and affordable way to manage your health. With Medivita, you can order medicines online, consult with doctors remotely, manage your prescriptions, set reminders, and track your health all in one place."
        },
        {
            question: "How does Medivita work?",
            answer: "Medivita allows users to order medicines online, consult doctors remotely through video or phone calls, manage prescriptions, set reminders, and track health, with a user-friendly interface and secure payment options, ensuring a seamless and hassle-free experience."
        },
        {
            question: "How do I contact Medivita customer support?",
            answer: "Contact Medivita customer support through phone, email, live chat, or support portal, available 24/7 to assist with queries, concerns, or technical issues, with a dedicated team providing prompt and helpful responses to ensure a smooth experience."
        },
        {
            question: "How do I pay for medicines and doctor consultations on Medivita?",
            answer: "Pay for medicines and doctor consultations on Medivita using credit/debit cards, net banking, digital wallets, or insurance, with secure payment options and transparent pricing, ensuring a convenient and hassle-free payment experience."
        },
        {
            question: "Is my personal and medical information secure on Medivita?",
            answer: "Medivita prioritizes security and confidentiality, using encryption, secure servers, and complying with data protection regulations, ensuring the protection of personal and medical information, with strict access controls and regular security audits to prevent unauthorized access."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const visibleFaqs = showMore ? faqData : faqData.slice(0,5);

    return(
        <div className="landing-page">
            <br />
            <div className='navbar'>
                <img src={logo} alt='logo-image' className='logo-img'/>
                <p className='web-name'>Medivita</p>
                <div>
                    <button className='sign-in'>Sign in</button>
                    <button className='sign-up'>Sign up</button>
                    <button className='about-us'>About Us</button>
                    <button className='contact-us'>Contact Us</button>
                </div>
            </div>
            <div className='home-grid'>
                <div className='grid-item'>
                    <img src={homeImg} alt='home-image' className='home-img' />
                </div>
                <div className='grid-item'>
                    <p className='quote-1'>
                        Get Healthy,<br /> 
                        Stay Healthy <br />
                        with Medivita!
                    </p>
                </div>
                <div className='grid-item'>
                    <img src={heart} alt='heart-image' className='heart-img'/>
                </div>
                <div className='grid-item'>
                    <p className='quote-2'>
                        Get medicines delivered, consult doctors<br />
                        online, manage prescriptions, set reminders,<br />
                        and track health, all in one place.
                    </p>
                    <h2>Our Partners</h2>
                    <div>
                        <img src={partner1} alt='partner1-image'/>
                        <img src={partner2} alt='partner2-image'/>
                        <img src={partner3} alt='partner3-image'/>
                        <img src={partner4} alt='partner4-image'/>
                    </div><br />
                    <div>
                        <img src={arrowImg} alt='arrow-image' className='arrow-img' />
                        <button className='start-btn'>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='faq-container'>
                <p className='faq-heading'>Frequently Asked Questions</p>
                {visibleFaqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        <p>{faq.question}</p>
                        <i className={`faq-toggle-icon ${activeIndex === index ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">
                        <p>{faq.answer}</p>
                        </div>
                    )}
                    </div>
                ))}
                {faqData.length > 5 && (
                    <button className="faq-show-more" onClick={toggleShowMore}>
                    {showMore ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default LandingPage;