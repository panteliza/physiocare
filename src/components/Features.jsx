import React, { useEffect } from "react";
import AOS from "aos"; // Proper ES module import for AOS
import "aos/dist/aos.css";
import bbImage from "../assets/cc.jpg"; // Replace with your image path

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const features = [
    "100% Patient Satisfaction",
    "Patient-Centered Care Models",
    "Integrated Digital Health Records",
    "Access to Experienced Doctors",
    "Respect for Patient Preferences",
    "Speech Therapy Available",
    "Advanced Diagnostic Technology",
    "Psychology Counseling",
    "Eco-Friendly Practices",
    "24/7 Patient Care",
    "Customized Physiotherapy Plans",
    "Post-Surgery Rehabilitation",
    "Sports Injury Recovery",
    "Neurological Physiotherapy",
    "Orthopedic Physiotherapy",
    "Cardiac Rehabilitation",
    "Pediatric Physiotherapy",
    "Geriatric Physiotherapy",
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Features List */}
        <div data-aos="fade-right">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#007791] mb-6">
            Features of Physiocare
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2" data-aos="fade-up" data-aos-delay={`${index * 50}`}>
                <span className="text-teal-700 font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center items-center" data-aos="fade-left">
          <div className="w-full max-w-sm">
            <img
              src={bbImage}
              alt="Physiocare Features"
              className="rounded-full shadow-lg"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
