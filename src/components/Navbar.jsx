import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'; // Replace with the actual path to your logo file

const Navbar = () => {
  return (
    <nav className="w-full bg-teal-700 text-white py-4 px-8 flex justify-between items-center shadow-lg fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-[50px] w-[150px]" />
        
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <Link to="/" className="hover:text-teal-300 transition duration-200">Home</Link>
        <Link to="/our-services" className="hover:text-teal-300 transition duration-200">Our Services</Link>
        <Link to="/about-us" className="hover:text-teal-300 transition duration-200">About Us</Link>
        <Link to="/gallery" className="hover:text-teal-300 transition duration-200">Gallery</Link>
        <Link to="/our-teams" className="hover:text-teal-300 transition duration-200">Our Teams</Link>
        <Link to="/contact-us" className="hover:text-teal-300 transition duration-200">Contact Us</Link>
      </div>

      {/* Book an Appointment Button */}
      <div>
        <a
          href="#book-appointment"
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400 transition duration-200"
        >
          Book An Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
