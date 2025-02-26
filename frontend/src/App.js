import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Aboutus from './Components/Aboutus.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}

export default App;
