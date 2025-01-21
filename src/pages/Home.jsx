import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import PhysiotherapyServices from '../components/PhysiotherapyServices';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/why';
import PhysiocareComponent from '../components/PhysiocareComponent';
import FAQComponent from '../components/Faq';
import DirectContactUs from '../components/DirectContact';
import Reviews from '../components/Reviews';
import Features from '../components/Features';
import DoctorsSlider from '../components/DoctorsSlider';





const Home = () => {
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
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
        <PhysiocareComponent/>
        <DoctorsSlider/>
        <PhysiotherapyServices/>
        <WhyChooseUs/>
        <Reviews/>
        <Features/>
        <FAQComponent/>
        <DirectContactUs/>
        <Footer/>
       
      </div>
    </div>
  );
};

export default Home;
