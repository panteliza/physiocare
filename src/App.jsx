import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
import './App.css'; // Add this for styling
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import AboutPhysiocare from './pages/About';
import ContactPage from './pages/ContactPage';
import NeurologicalPhysiotherapy from './pages/NeurologicalPhysiotherapy';
import OrthopaedicPhysiotherapy from './pages/OrthopaedicPhysiotherapy';
import GeriatricPhysiotherapy from './pages/GeriatricPhysiotherapy';
import PediatricPhysiotherapy from './pages/PediatricPhysiotherapy';
import GynecologicalPhysiotherapy from './pages/GynecologicalPhysiotherapy';
import PostSurgeryPhysiotherapy from './pages/PostSurgeryPhysiotherapy';
import PostFracturePhysiotherapy from './pages/PostFracturePhysiotherapy';
import SportsInjuryPhysiotherapy from './pages/SportsInjuryPhysiotherapy';
import CardiacRehabPhysiotherapy from './pages/CardiacRehabPhysiotherapy';
import PostChemotherapyPhysiotherapy from './pages/PostChemotherapyPhysiotherapy';
import RespiratoryPhysiotherapy from './pages/PhysiotherapyServices';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
        <Route path="/our-services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutPhysiocare />} />
        <Route path="post-surgery-physiotherapy" element={<PostSurgeryPhysiotherapy />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/respiratory-physiotherapy" element={<RespiratoryPhysiotherapy />} />
        <Route path="/physiotherapy-post-chemotherapy" element={<PostChemotherapyPhysiotherapy />} />
        <Route path="/cardiac-rehab-physiotherapy" element={<CardiacRehabPhysiotherapy />} />
        <Route path="/sports-injury-physiotherapy" element={<SportsInjuryPhysiotherapy />} />
        <Route path="/post-fracture-physiotherapy" element={<PostFracturePhysiotherapy />} />
        <Route path="/gynecological-physiotherapy" element={<GynecologicalPhysiotherapy />} />
        <Route path="/pediatric-physiotherapy" element={<PediatricPhysiotherapy />} />
        <Route path="/geriatric-physiotherapy" element={<GeriatricPhysiotherapy />} />
        <Route path="/orthopaedic-physiotherapy" element={<OrthopaedicPhysiotherapy />} />
        <Route path="/neurological-physiotherapy" element={<NeurologicalPhysiotherapy />} />
          <Route path="/" element={<Home />} />
          </Routes>
          {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9708476971"
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


