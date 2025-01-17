import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/logo2.png'; // Replace with the actual path to your logo file

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <style>{`
        .zoom-effect {
          transition: transform 0.3s ease-in-out;
        }
        .zoom-effect:hover {
          transform: scale(1.1);
        }
      `}</style>

      <nav className="w-full bg-[#4169E1] text-white py-4 px-8 flex justify-between items-center shadow-lg fixed top-0 left-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-[50px] w-[150px]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="hover:text-teal-300 transition duration-200">
            Home
          </Link>
          <Link to="/our-services" className="hover:text-teal-300 transition duration-200">
            Our Services
          </Link>
          <Link to="/about-us" className="hover:text-teal-300 transition duration-200">
            About Us
          </Link>
          <Link to="/gallery" className="hover:text-teal-300 transition duration-200">
            Gallery
          </Link>
          
          <Link to="/contact-us" className="hover:text-teal-300 transition duration-200">
            Contact Us
          </Link>
        </div>

        {/* Book an Appointment Button */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/9708476971"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400 transition duration-200"
          >
            Book An Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <FiAlignJustify
          className="text-3xl lg:hidden cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-[#4169E1] shadow-lg z-50 flex flex-col">
            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl text-white cursor-pointer"
              onClick={toggleSidebar}
            />
            <div className="flex justify-center mt-10">
              <img
                src={logo}
                alt="Logo"
                className="h-[70px] w-[150px] object-contain zoom-effect"
              />
            </div>
            <Link
              to="/"
              className="text-white font-medium py-3 px-6 border-b border-teal-600 hover:bg-teal-600"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <Link
              to="/our-services"
              className="text-white font-medium py-3 px-6 border-b border-teal-600 hover:bg-teal-600"
              onClick={toggleSidebar}
            >
              Our Services
            </Link>
            <Link
              to="/about-us"
              className="text-white font-medium py-3 px-6 border-b border-teal-600 hover:bg-teal-600"
              onClick={toggleSidebar}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="text-white font-medium py-3 px-6 border-b border-teal-600 hover:bg-teal-600"
              onClick={toggleSidebar}
            >
              Gallery
            </Link>
            
            <Link
              to="/contact-us"
              className="text-white font-medium py-3 px-6 border-b border-teal-600 hover:bg-teal-600"
              onClick={toggleSidebar}
            >
              Contact Us
            </Link>
            <div className="mt-auto mb-4 px-6">
              <a
                href="https://wa.me/9708476971"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 w-full text-center py-2 rounded-lg block hover:bg-green-400 transition duration-200"
              >
                Book an appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
