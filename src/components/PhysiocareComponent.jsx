import React from 'react';
import physiotherapist from '../assets/a.png';

const PhysiocareComponent = () => {
  return (
    <div className="bg-teal-900 text-white">
      {/* Hero Section */}
      <div className="text-center py-8 px-4 md:px-12 lg:px-24">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          WELCOME TO PHYSIOCARE
        </h1>
        <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto mb-6">
          Our expert team specializes in physiotherapy services tailored to your needs, helping you recover, rejuvenate, and thrive. We provide compassionate care in a supportive environment.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="#about"
            className="flex items-center justify-center w-full md:w-auto border-2 border-teal-500 text-sm md:text-base py-2 px-6 rounded-full font-medium text-white hover:border-teal-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-center"
          >
            More About Us →
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center w-full md:w-auto border-2 border-gray-500 text-sm md:text-base py-2 px-6 rounded-full font-medium text-white hover:border-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-center"
          >
            Contact Us →
          </a>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex justify-center items-center py-8 px-4">
        <div className="bg-white text-gray-800 shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <img
            src={physiotherapist}
            alt="Physiotherapist"
            className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto mb-4 border-4 border-teal-500"
          />
          <h3 className="text-base md:text-xl font-bold text-teal-600 text-center">
            PHYSIOTHERAPIST
          </h3>
          <p className="text-xs md:text-base text-center text-gray-700">
            Dr. Jane Doe
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhysiocareComponent;
