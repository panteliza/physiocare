import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import imgA from "../assets/a.png";
import imgB from "../assets/b.png";
import imgC from "../assets/c.png";
import imgD from "../assets/d.png";
import imgE from "../assets/e.png";
import imgF from "../assets/f.png";

const features = [
  {
    id: 1,
    title: "At-home Service",
    description: "Our Doctors visit you on the booked date and time at your Home.",
    image: imgA,
  },
  {
    id: 2,
    title: "Qualified Doctors",
    description: "Our Doctors hold BPT or MPT degrees with years of experience.",
    image: imgB,
  },
  {
    id: 3,
    title: "Standard Pricings",
    description: "No hidden charges. No Overcharging. Standard pricing.",
    image: imgC,
  },
  {
    id: 4,
    title: "Discounted Packages",
    description:
      "Suitable for the issues requiring Long Term Treatment Plans.",
    image: imgD,
  },
  {
    id: 5,
    title: "Saves Time & Money",
    description: "Saves your money & time, through Doorstep Service.",
    image: imgE,
  },
  {
    id: 6,
    title: "Hassle Free Service",
    description:
      "Doorstep Convenience to Patients, helps in faster healing.",
    image: imgF,
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold text-[#005A9C]"
          data-aos="fade-down"
        >
          WHY CHOOSE US?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-[#ADD8E6] border border-blue-300 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${id * 100}`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={image}
                alt={title}
                className="h-16 w-16 object-contain"
              />
            </div>
            <h2 className="text-lg font-bold text-[#005A9C] mb-2">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
