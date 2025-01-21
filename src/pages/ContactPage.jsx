import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import DirectContactUs from '../components/DirectContact';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] bg-gray-100 animate-fadeIn">
        

        {/* Contact Form */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <Contact />
        </div>

        {/* Direct Contact Section */}
        <div className="max-w-4xl w-full bg-gray-200 shadow-lg rounded-lg overflow-hidden mb-10 p-6">
          <DirectContactUs />
        </div>

        {/* Reviews Section */}
       
      </div>

      {/* Footer */}
      <Footer />

      <style>{`
        /* Fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-down effect */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Classes */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
