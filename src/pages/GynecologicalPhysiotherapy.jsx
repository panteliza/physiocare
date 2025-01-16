import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img5 from "../assets/hg.png"; // Replace with the actual image path
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const GynecologicalPhysiotherapy = () => {
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
          Gynecological Physiotherapy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src={img5}
            alt="Gynecological Physiotherapy"
            className="w-96 h-auto object-cover rounded-lg shadow-lg animate-zoomIn"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-300">
            What is Gynecological Physiotherapy?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-500">
            Gynecological physiotherapy focuses on addressing physical conditions and challenges unique to women’s health, particularly related to the pelvic floor, pregnancy, postpartum recovery, and menopause. This specialized care helps improve overall well-being and quality of life.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-700">
            How Does Gynecological Physiotherapy Work?
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700 animate-fadeIn delay-900">
            Gynecological physiotherapy uses targeted exercises, manual therapy, and lifestyle advice to treat pelvic floor dysfunctions, manage pain, and restore strength and flexibility. The physiotherapist develops a personalized plan tailored to each woman’s specific needs and goals.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1100">
            Conditions Treated in Gynecological Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1300">
            <li>Pelvic Floor Dysfunction</li>
            <li>Urinary Incontinence</li>
            <li>Pelvic Pain</li>
            <li>Pregnancy and Postpartum Recovery</li>
            <li>Diastasis Recti</li>
            <li>Endometriosis-Related Pain</li>
            <li>Menopause-Related Issues</li>
            <li>Post-Surgical Rehabilitation</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn delay-1500">
            Benefits of Gynecological Physiotherapy
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 animate-fadeIn delay-1700">
            <li>Improved pelvic floor strength and function</li>
            <li>Relief from chronic pelvic pain</li>
            <li>Better bladder and bowel control</li>
            <li>Enhanced recovery post-pregnancy and surgery</li>
            <li>Support during menopause</li>
            <li>Improved overall physical and emotional well-being</li>
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

export default GynecologicalPhysiotherapy;
