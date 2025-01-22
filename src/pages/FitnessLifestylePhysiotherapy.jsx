import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img9 from "../assets/hgh.png"; // Replace with the actual image path
import ao from "../assets/ao.jpeg"; // Replace with the actual image path
import bo from "../assets/bo.jpeg"; // Replace with the actual image path
import co from "../assets/co.jpeg"; // Replace with the actual image path
import doImage from "../assets/do.jpeg"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const FitnessLifestylePhysiotherapy = () => {
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
          Fitness and Lifestyle Modification Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img9}
            alt="Fitness and Lifestyle Physiotherapy"
            className="w-80 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
             {/* Additional Images Section */}
             <div className="grid grid-cols-2 gap-4 mt-10">
            <img
              src={ao}
              alt="Additional Image 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg animate-fadeIn delay-1900"
            />
            <img
              src={bo}
              alt="Additional Image 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg animate-fadeIn delay-2000"
            />
            <img
              src={co}
              alt="Additional Image 3"
              className="w-full h-auto object-cover rounded-lg shadow-lg animate-fadeIn delay-2100"
            />
            <img
              src={doImage}
              alt="Additional Image 4"
              className="w-full h-auto object-cover rounded-lg shadow-lg animate-fadeIn delay-2200"
            />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Fitness and Lifestyle Modification Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Fitness and lifestyle modification physiotherapy is a holistic approach aimed at enhancing overall physical and mental well-being. It focuses on improving physical fitness, managing stress, and promoting healthier habits to achieve a balanced lifestyle.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does it Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            This physiotherapy approach combines exercise programs, ergonomic advice, stress management techniques, and guidance on healthy living. A physiotherapist works closely with individuals to tailor a plan that fits their goals and lifestyle, ensuring sustainable changes.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Key Focus Areas
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Weight management</li>
            <li>Improving posture</li>
            <li>Boosting physical endurance</li>
            <li>Stress relief through therapeutic techniques</li>
            <li>Developing healthy sleep patterns</li>
            <li>Preventing lifestyle-related diseases</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Fitness and Lifestyle Modification Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Enhanced energy levels and vitality</li>
            <li>Better physical and mental health</li>
            <li>Reduced risk of chronic conditions</li>
            <li>Improved flexibility and strength</li>
            <li>Long-term sustainable lifestyle changes</li>
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

export default FitnessLifestylePhysiotherapy;
