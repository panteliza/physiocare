import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import bbImage from "../assets/bb.png"; // Adjust the path as needed
import "aos/dist/aos.css";

const Reviews = () => {
  const testimonials = [
    {
      name: "Muna Sapkota",
      content:
        "Physiocare excels in providing top-tier therapy services, combining expertise and compassion to support patient well-being. Their skilled therapists and personalized treatment plans made my recovery seamless and effective.",
    },
    {
      name: "Ram Bahadur Thapa",
      content:
        "I am deeply grateful for the exceptional care I received at Physiocare. Their team of professionals helped me regain my mobility after surgery with patience and expertise.",
    },
    {
      name: "Anita Pandey",
      content:
        "Physiocare's dedication to patient health is remarkable. Their facilities and therapies are top-notch, and I highly recommend them to anyone seeking effective physiotherapy services.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-teal-700">
          Thoughts From Our Patients
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Reviews */}
        <div className="flex flex-col justify-center items-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-lg shadow-lg w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {testimonial.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right Column - Static Image */}
        <div className="flex justify-center items-center">
          <img
            src={bbImage}
            alt="Clinic Information"
            className="w-4/5 max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
