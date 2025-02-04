import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import Dash from './components/Dash';
import Logup from './components/Logup';
import Profile from './components/Profile';
import Photos from './components/Photos';
import Videos from './components/Videos'
import Signup from './components/SignupForm';
import Login from './components/LoginForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path='/Logup' element={<Logup />} />
         <Route path='/Profile' element={<Profile />}/>
        <Route path='/Photos' element={<Photos />} />
        <Route path='/Videos' element={<Videos />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />

      </Routes>
    </Router>
  );
}
