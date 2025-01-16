import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img6 from "../assets/jk.png"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const PostSurgeryPhysiotherapy = () => {
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
          Post-Surgery Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img6}
            alt="Post-Surgery Physiotherapy"
            className="w-96 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Post-Surgery Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Post-surgery physiotherapy is essential for effective recovery and rehabilitation after surgical procedures. It helps restore mobility, improve strength, and reduce pain, ensuring a quicker and safer return to daily activities.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does Post-Surgery Physiotherapy Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            Post-surgery physiotherapy includes a combination of gentle exercises, manual therapy, and modalities like ultrasound or electrical stimulation. The physiotherapist creates a customized plan to address the specific needs of the patient and support their recovery goals.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Conditions Treated in Post-Surgery Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Orthopedic Surgeries (e.g., joint replacements, ligament repairs)</li>
            <li>Spinal Surgeries</li>
            <li>Cardiac Surgeries</li>
            <li>Abdominal Surgeries</li>
            <li>Neurological Surgeries</li>
            <li>Post-Trauma Surgeries</li>
            <li>Amputations</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Post-Surgery Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Reduced pain and inflammation</li>
            <li>Improved mobility and flexibility</li>
            <li>Enhanced strength and endurance</li>
            <li>Prevention of complications (e.g., blood clots, scar tissue)</li>
            <li>Faster return to daily activities</li>
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

export default PostSurgeryPhysiotherapy;
