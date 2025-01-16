import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img9 from "../assets/ed.png"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const CardiacRehabPhysiotherapy = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] bg-gray-100 animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideDown">
          Cardiac Rehab Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img9}
            alt="Cardiac Rehab Physiotherapy"
            className="w-96 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Cardiac Rehab Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Cardiac rehabilitation physiotherapy is a specialized program designed to improve heart health and overall well-being following a heart attack, surgery, or diagnosis of heart disease. It combines exercises, education, and lifestyle modification strategies to support recovery and prevent future complications.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does Cardiac Rehab Physiotherapy Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            Cardiac rehab physiotherapy involves closely monitored physical activity tailored to the patient’s condition, along with education on heart-healthy habits. The program aims to strengthen the heart, improve circulation, and enhance overall fitness under the guidance of trained professionals.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Conditions Treated in Cardiac Rehab Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Heart Attack Recovery</li>
            <li>Post-Bypass Surgery</li>
            <li>Angina</li>
            <li>Heart Failure</li>
            <li>Valve Replacement Surgery</li>
            <li>Cardiomyopathy</li>
            <li>Post-Stent Placement</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Cardiac Rehab Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Improved cardiovascular fitness</li>
            <li>Better management of heart-related symptoms</li>
            <li>Reduced risk of future heart issues</li>
            <li>Enhanced strength and endurance</li>
            <li>Improved mental health and quality of life</li>
          </ul>
        </div>
      </div>
      <PhysiotherapyServices />

      {/* Footer */}
      <Footer />

      <style>{`
        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

export default CardiacRehabPhysiotherapy;
