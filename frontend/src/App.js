import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import LandingPage from './Components/LandingPage.jsx';
//import Contactus from './Components/Contactus.jsx';
import HomePage from './Components/HomePage.jsx';
//import ForgotPassword from './Components/ForgotPassword.jsx';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/contactus" element={<Contactus />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
