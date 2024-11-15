import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
