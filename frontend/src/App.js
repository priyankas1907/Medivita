import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
