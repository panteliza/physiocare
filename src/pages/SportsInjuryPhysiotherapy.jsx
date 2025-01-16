import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img8 from "../assets/yh.png"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const SportsInjuryPhysiotherapy = () => {
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
          Sports Injury Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img8}
            alt="Sports Injury Physiotherapy"
            className="w-96 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Sports Injury Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Sports injury physiotherapy focuses on the prevention, diagnosis, and treatment of sports-related injuries. It helps athletes of all levels recover quickly and safely while enhancing their performance and preventing future injuries.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does Sports Injury Physiotherapy Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            Sports injury physiotherapy uses a combination of therapeutic exercises, manual therapy, and advanced techniques like taping, ultrasound, and electrotherapy. The physiotherapist tailors the treatment plan to the athlete’s specific needs, ensuring optimal recovery and performance.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Common Sports Injuries Treated
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Sprains and Strains</li>
            <li>Ligament Injuries (e.g., ACL, MCL)</li>
            <li>Tendonitis (e.g., Achilles tendonitis, tennis elbow)</li>
            <li>Muscle Tears</li>
            <li>Shin Splints</li>
            <li>Shoulder Injuries (e.g., rotator cuff injuries)</li>
            <li>Knee Injuries</li>
            <li>Fractures and Dislocations</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Sports Injury Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Faster recovery and return to sports</li>
            <li>Improved strength and flexibility</li>
            <li>Reduced pain and inflammation</li>
            <li>Prevention of future injuries</li>
            <li>Enhanced athletic performance</li>
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

export default SportsInjuryPhysiotherapy;
