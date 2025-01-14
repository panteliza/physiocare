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
    <div className="w-full bg-teal-50 py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold text-teal-700"
          data-aos="fade-down"
        >
          Our Services
        </h1>
        <p
          className="text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Choose the physiotherapy service that suits your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ id, name, image, link }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${id * 100}`}
          >
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-full h-52 object-contain p-4 transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-teal-700 hover:text-teal-900 transition-colors duration-300">
                {name}
              </h2>
              <Link
                to={link}
                className="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
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
