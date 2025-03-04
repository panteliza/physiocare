import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import DirectContactUs from '../components/DirectContact';

import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import AboutPhysiocare from '../components/AboutPhysiocare';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <div className="pt-[70px]">
      {/* Navbar */}
      <Navbar />
</div>
      {/* Contact Section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
        <Contact />
        <DirectContactUs />
     <Reviews/>
     <AboutPhysiocare/>
<Footer />

      
    </div>
    </div>
  );
};

export default ContactPage;
