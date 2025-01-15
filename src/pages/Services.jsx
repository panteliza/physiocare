import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
;
import FAQComponent from '../components/Faq';
import DirectContactUs from '../components/DirectContact';
import PhysiotherapyServices from '../components/PhysiotherapyServices';

const Services = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      <div className="w-full flex-shrink-0 overflow-hidden">
        <PhysiotherapyServices/>
        <FAQComponent/>
        <DirectContactUs/>
        <Footer/>
       
      </div>
    </div>
  )
}

export default Services