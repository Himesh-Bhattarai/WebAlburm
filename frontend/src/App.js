import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Photos from './components/Photos';
import Videos from './components/Videos'
import Signup from './components/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path='/Profile' element={<Profile />}/>
        <Route path='/Photos' element={<Photos />} />
        <Route path='/Videos' element={<Videos />} />
        <Route path='/Signup' element={<Signup />} />


      </Routes>
    </Router>
  );
}
