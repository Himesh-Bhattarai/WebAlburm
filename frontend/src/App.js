import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Postfeed from './components/Postfeed';
import Setting from './components/Setting';
import Signup from './components/Signup';

export default function App() {

  const bgImgURI = "/FrontBackground/background2.jpg"


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard backgroundImage={bgImgURI} />} />
        <Route path="/about" element={<Postfeed />} />
        <Route path="/contact" element={<Setting />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}
