import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Postfeed from './components/Postfeed';
import Setting from './components/Setting';
import Signup from './components/Signup';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<Postfeed />} />
        <Route path="/contact" element={<Setting />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
