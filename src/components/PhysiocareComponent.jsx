import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import physiotherapist from '../assets/doctor.jpeg';

const PhysiocareComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('fade-in-animation');
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <style>{`
        /* Animation classes */
        .opacity-0 {
          opacity: 0;
        }
        .fade-in-animation {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 1s ease-in-out;
        }
        .slide-from-top {
          transform: translateY(-2rem);
        }
        .slide-from-bottom {
          transform: translateY(2rem);
        }

        /* Glowing Border Styling */
        .highlight-border {
          border: 2px solid transparent;
          animation: border-glow 2s infinite;
          position: relative;
        }
        .highlight-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          border-radius: 9999px; /* Full-rounded corners */
          border: 2px solid rgba(0, 255, 0, 0.6);
          animation: border-glow-color 2s infinite;
        }

        /* Keyframes for border and glow */
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.6), 0 0 15px rgba(0, 255, 0, 0.4);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.6), 0 0 15px rgba(0, 255, 0, 0.4);
          }
        }
      `}</style>

      <div className="bg-[#005A9C] text-white">
        {/* Hero Section */}
        <div className="text-center py-12 px-4 md:px-12 lg:px-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-professional animate-on-scroll slide-from-top">
            WELCOME TO <span className="glow-text ">PHYSIOCARE</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto mb-6 animate-on-scroll slide-from-bottom">
            Our expert team specializes in physiotherapy services tailored to your needs, helping you recover, rejuvenate, and thrive. We provide compassionate care in a supportive environment.
          </p>

          {/* Highlighted Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <Link
              to="/about-us"
              className="relative flex items-center justify-center md:w-auto py-3 px-6 text-sm md:text-base rounded-full font-medium text-white border border-teal-400 highlight-border transition duration-300 focus:outline-none animate-on-scroll slide-from-bottom"
            >
              More About Us →
            </Link>
            <Link
              to="/contact-us"
              className="relative flex items-center justify-center md:w-auto py-3 px-6 text-sm md:text-base rounded-full font-medium text-white border border-teal-400 highlight-border transition duration-300 focus:outline-none animate-on-scroll slide-from-bottom"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex justify-center items-center py-12 px-4">
          <div className="bg-white text-gray-800 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-t-4 border-green-500 animate-on-scroll slide-from-bottom">
            <div className="w-full h-64 overflow-hidden">
              <img
                src={physiotherapist}
                alt="Physiotherapist"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-600">
                PHYSIOTHERAPIST
              </h3>
              <p className="text-sm text-gray-600">Dr. Jane Doe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhysiocareComponent;
