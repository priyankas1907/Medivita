import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Aboutus from './Components/Aboutus.jsx'
import Signup from './Components/Signup.jsx';
import SignupDoctor from './Components/SignupDoctor.jsx';
import SignupMedSeller from './Components/SignupMedSeller.jsx';
import SignupUser from './Components/SignupUser.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupDoctor" element={<SignupDoctor />} />
        <Route path="/SignupMedSeller" element={<SignupMedSeller />} />
        <Route path="/SignupUser" element={<SignupUser />} />
      </Routes>
    </Router>
  );
}

export default App;
