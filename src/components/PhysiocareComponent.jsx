import React from 'react';
import physiotherapist from '../assets/a.png';

const PhysiocareComponent = () => {
  return (
    <div className="flex flex-col items-center bg-blue-50 p-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-teal-700 mb-4 animate-fade-in">
          WELCOME TO PHYSIOCARE
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto animate-fade-in-delayed">
          We specialize in advanced physiotherapy services to help you recover, rejuvenate, and regain your strength.
          Our expert team is here to support you in achieving optimal health in a compassionate environment.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
          >
            More About Us
          </a>
          <a
            href="#contact"
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
          <img
            src={physiotherapist}
            alt="Physiotherapist"
            className="w-32 h-32 rounded-full mb-4 border-4 border-teal-500"
          />
          <h3 className="text-xl font-bold text-teal-700">PHYSIOTHERAPIST</h3>
          <p className="text-gray-600">Dr. Jane Doe</p>
        </div>
      </div>
    </div>
  );
};

export default PhysiocareComponent;
