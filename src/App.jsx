import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
