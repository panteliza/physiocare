import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/qw.png"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const NeurologicalPhysiotherapy = () => {
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
          Neurological Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img1}
            alt="Neurological Physiotherapy"
            className="w-96 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Neurological Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Neurological physiotherapy involves the treatment of people with movement and function disorders that have originated from problems within the body’s nervous and neuromuscular system. These conditions often manifest as muscle weakness, poor balance and coordination, uncontrolled muscle spasms and tremors, loss of function, and decreased sensation.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does Neurological Physiotherapy Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            Neurological Physiotherapy helps to kick-start the message pathways that the patient’s brain struggles to use. Through repetitive actions and exercises guided by a physiotherapist, new pathways are created. This treatment can improve symptoms such as difficulties with balance, walking, spasticity, and pain, and can help restore independence.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Conditions Treated in Neurological Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Stroke Paralysis</li>
            <li>Parkinson’s Disease</li>
            <li>Bell’s Palsy</li>
            <li>Cerebral Palsy</li>
            <li>Multiple Sclerosis</li>
            <li>Traumatic Brain Injury</li>
            <li>Spinal Cord Injury</li>
            <li>Alzheimer’s Disease</li>
            <li>Guillain-Barre Syndrome (GBS)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Neurological Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Improved motor skills and coordination</li>
            <li>Enhanced posture and balance</li>
            <li>Reduced muscle stiffness</li>
            <li>Increased muscle strength</li>
            <li>Improved independence and daily activity capabilities</li>
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

export default NeurologicalPhysiotherapy;
