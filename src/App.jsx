import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
import './App.css'; // Add this for styling
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
        <Route path="/our-services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
          </Routes>
          {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/ 9841675370"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;


