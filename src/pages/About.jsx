import React, { useEffect } from "react";
import PhysioImage from "../assets/ddd.jpeg"; // Ensure this path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const AboutPhysiocare = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] animate-fadeIn">
        {/* Adjusted padding to prevent content overlap */}
        <h1 className="text-4xl font-bold text-[#007791] mb-6 animate-slideDown">
          About Physiocare
        </h1>
        <div className="max-w-7xl w-full flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-zoomIn">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 group relative">
            <img
              src={PhysioImage}
              alt="Physiocare Team"
              className="w-full h-[300px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <p className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Physiocare: Your Partner in Health and Rehabilitation
            </p>
          </div>

          {/* Right Section - Description */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-white animate-fadeIn delay-300">
              Welcome to Physiocare
            </h2>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-500">
              Located in the heart of Kupondol, Lalitpur, Physiocare is dedicated to providing exceptional physiotherapy and rehabilitation services. Our experienced team of professionals works tirelessly to help patients recover from injuries, manage chronic pain, and improve overall well-being.
            </p>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-700">
              At Physiocare, we offer personalized treatment plans tailored to meet each individual’s unique needs. Our services include physiotherapy, therapeutic exercises, manual therapy, electrotherapy, and ergonomic consultations to support your journey toward recovery.
            </p>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-900">
              What sets us apart is our commitment to holistic care, ensuring that every patient receives comprehensive support in achieving their health goals. Whether you’re recovering from an injury, managing a chronic condition, or seeking preventive care, Physiocare is here to guide you every step of the way. Together, let’s work toward a healthier, more active future.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
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

        /* Zoom-in effect */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Classes */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1.5s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPhysiocare;
