import React from 'react';
import Navbar from '../components/Navbar';
import PhysiotherapyServices from '../components/PhysiotherapyServices';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/why';
import PhysiocareComponent from '../components/PhysiocareComponent';
import FAQComponent from '../components/Faq';





const Home = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
        <PhysiocareComponent/>
        <PhysiotherapyServices/>
        <WhyChooseUs/>
        <FAQComponent/>
        <Footer/>
       
      </div>
    </div>
  );
};

export default Home;
