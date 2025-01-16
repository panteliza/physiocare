import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQComponent from '../components/Faq';
import DirectContactUs from '../components/DirectContact';
import PhysiotherapyServices from '../components/PhysiotherapyServices';
import AboutPhysiocare from '../components/AboutPhysiocare';

const Services = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      <div className="w-full flex-shrink-0 overflow-hidden">
        <PhysiotherapyServices />
        <AboutPhysiocare/>
        <FAQComponent />
        <DirectContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Services;
