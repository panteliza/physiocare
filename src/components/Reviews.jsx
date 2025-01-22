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
      name: "Sulav Adhikari",
      content:
        "I’ve dealt with a disc bulge for over 10 years, facing constant pain, stiffness, and limited mobility due to inadequate care after my initial injury at 13. Meeting Dr. Ujjwal Dotel changed everything—his detailed assessments, hands-on techniques, and personalized treatment plan addressed the root causes, not just the symptoms. Thanks to his expertise, I’ve regained mobility, reduced pain, and found long-term relief. His professionalism and genuine care make him highly recommended for anyone dealing with chronic pain or mobility issues.",
    },
    {
      name: "Barsha Moktan",
      content:
        "I was referred to Ujjwal by Dr. Rajeev Manandhar for chronic pain in the neck and scapular region. He identified that it was potentially postural and also aggravated due to my profession as a dentist. I had my fourth session with him today and wish I had more time in person but looking forward to continuing our sessions virtually since I am heading back to the US tonight. He focuses on your specific problem areas and is willing to go above and beyond. He has prepared a treatment plan with a detailed description to continue my therapy at home. One of the best therapists I have worked with.",
    },
    {
      name: "Roshan Karki",
      content:
        "I had 4 nerves pinched on my neck and was unable to do the regular work. It was hard for me to stand or sleep. But after meeting Ujjwal ji, he guided my recovery in such a wonderful way. I never felt like I had met him for the first time, it was like we had known each other from a long time ago. He guided my sessions on multiple months from where I have recovered almost. Still continuing my therapy sessions with this wonderful person. Cheers to this smiley person with the great skills and a person with very good professionalism. Highly recommended.",
    },
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
        <h2 className="text-2xl sm:text-4xl font-bold text-[#005A9C]">
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
            autoplay={{ delay: 10000, disableOnInteraction: false }}
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
