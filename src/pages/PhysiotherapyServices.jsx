import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img11 from "../assets/hdg.png"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const RespiratoryPhysiotherapy = () => {
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
          Respiratory Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img11}
            alt="Respiratory Physiotherapy"
            className="w-96 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Respiratory Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Respiratory physiotherapy is a specialized treatment aimed at improving lung function, managing respiratory conditions, and enhancing overall breathing efficiency. It focuses on clearing airways, improving oxygenation, and reducing breathlessness for better quality of life.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does Respiratory Physiotherapy Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            Respiratory physiotherapy employs techniques like breathing exercises, chest physiotherapy, and airway clearance methods. It also incorporates physical activity to strengthen respiratory muscles and improve endurance.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Conditions Treated in Respiratory Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
            <li>Asthma</li>
            <li>Bronchiectasis</li>
            <li>Pneumonia</li>
            <li>Post-COVID Recovery</li>
            <li>Cystic Fibrosis</li>
            <li>Post-Surgical Respiratory Issues</li>
            <li>Respiratory Muscle Weakness</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Respiratory Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Improved lung function and oxygenation</li>
            <li>Reduced shortness of breath</li>
            <li>Enhanced ability to clear mucus</li>
            <li>Better endurance and energy levels</li>
            <li>Improved overall quality of life</li>
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

export default RespiratoryPhysiotherapy;
