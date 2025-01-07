import React from 'react';
import Navbar from '../components/Navbar';





const Home = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
       
      </div>
    </div>
  );
};

export default Home;
