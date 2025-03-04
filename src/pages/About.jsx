import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutComponent from "../components/AboutComponent";
import DirectContactUs from "../components/DirectContact";
import FAQComponent from "../components/Faq";

const AboutPhysiocare = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    {/* Navbar is fixed, so we add a wrapper with padding */}
    <div className="pt-[70px]">
      <Navbar />
    </div>
    <div className="w-full flex-shrink-0 overflow-hidden">
    <AboutComponent/>
 
        <FAQComponent />
        <DirectContactUs />
        <Footer />
    
    </div>
    </div>
  );
};

export default AboutPhysiocare;
