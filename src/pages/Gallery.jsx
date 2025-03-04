import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GalleryContent from "./GalleryContent";
import FAQComponent from "../components/Faq";
import DirectContactUs from "../components/DirectContact";

// Import images


const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, []);

  

  return (
    <div>
    <div className="pt-[70px]">
      {/* Navbar */}
      <Navbar />
</div>
<div className="w-full flex-shrink-0 overflow-hidden">
        <GalleryContent/>
        <FAQComponent/>
        <DirectContactUs/>
        <Footer />
      </div>
     

   
    </div>
  );
};

export default Gallery;
