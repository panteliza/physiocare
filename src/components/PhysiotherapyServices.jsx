import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all images statically
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";

const services = [
  { id: 1, name: "Neurological Physiotherapy", image: img1, link: "/neurological-physiotherapy" },
  { id: 2, name: "Orthopaedic Physiotherapy", image: img2, link: "/orthopaedic-physiotherapy" },
  { id: 3, name: "Geriatric Physiotherapy", image: img3, link: "/geriatric-physiotherapy" },
  { id: 4, name: "Pediatric Physiotherapy", image: img4, link: "/pediatric-physiotherapy" },
  { id: 5, name: "Gynecological Physiotherapy", image: img5, link: "/gynecological-physiotherapy" },
  { id: 6, name: "Post Surgery Physiotherapy", image: img6, link: "/post-surgery-physiotherapy" },
  { id: 7, name: "Post Fracture Physiotherapy", image: img7, link: "/post-fracture-physiotherapy" },
  { id: 8, name: "Sports Injury Physiotherapy", image: img8, link: "/sports-injury-physiotherapy" },
  { id: 9, name: "Cardiac Rehab Physiotherapy", image: img9, link: "/cardiac-rehab-physiotherapy" },
  { id: 10, name: "Physiotherapy Post Chemotherapy", image: img10, link: "/physiotherapy-post-chemotherapy" },
  { id: 11, name: "Respiratory Physiotherapy", image: img11, link: "/respiratory-physiotherapy" },
];

const PhysiotherapyServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);

  return (
    <div className="w-full bg-teal-50 py-12 px-4 sm:px-6">
      <div className="text-center mb-10">
        <h1
          className="text-xl sm:text-3xl font-bold text-[#005A9C]"
          data-aos="fade-down"
        >
          Our Services
        </h1>
        <p
          className="text-sm sm:text-base text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Choose the physiotherapy service that suits your needs.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {services.map(({ id, name, image, link }) => (
          <div
            key={id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${id * 100}`}
          >
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-full h-32 sm:h-40 object-contain p-2 sm:p-3 transition-transform duration-500 hover:scale-105 "
              />
            </div>
            <div className="p-2 sm:p-3 text-center">
              <h2 className="text-xs sm:text-sm font-bold text-[#005A9C] hover:text-teal-900 transition-colors duration-300">
                {name}
              </h2>
              <Link
                to={link}
                className="inline-block mt-2 sm:mt-3 bg-[#005A9C] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded shadow hover:bg-blue-500 transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysiotherapyServices;
