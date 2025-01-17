import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Why is Physiocare considered the best therapy clinic?",
    answer: "Physiocare offers state-of-the-art facilities and highly skilled therapists, making it the top choice for therapy services.",
  },
  {
    question: "Why should I choose Physiocare over other physical therapy providers?",
    answer: "Physiocare combines personalized care with advanced techniques, ensuring optimal recovery and client satisfaction.",
  },
  {
    question: "What makes Physiocare's approach unique?",
    answer: "Our approach is holistic, integrating modern therapies with patient-centered care for comprehensive well-being.",
  },
  {
    question: "How experienced are the therapists at Physiocare?",
    answer: "Our therapists are certified professionals with years of experience in various therapy specializations.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-teal-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold text-[#005A9C]"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#2E5090] text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#3E8EDE] transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 text-gray-100 bg-[#2774AE] transition-all duration-300"
                data-aos="fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
