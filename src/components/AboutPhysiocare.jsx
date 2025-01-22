import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPhysiocare = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const questions = [
    {
      question: "What is Physiotherapy?",
      answer:
        "Physiotherapy is a healing method focused on mobility. Physiotherapists work with individuals with temporary or permanent mobility problems caused by injury, disease, aging, or birth abnormalities. They assess clients to determine their physical status and the potential for improvement and change.",
    },
    {
      question: "What is the focus of Physiotherapy?",
      answer: `Physiotherapy, when indicated, often focuses on:
      - Decreasing pain
      - Increasing joint movement and flexibility
      - Building muscle strength and endurance
      - Improving balance and coordination
      - Enhancing tolerance in exercise and daily activities
      - Education about the condition and therapy program
      - Providing advice on ways to prevent further injury or deterioration.`,
    },
    {
      question: "What are the benefits of Physiotherapy at Home?",
      answer: `Physiotherapy at home offers personalized care in a comfortable environment. It can be highly effective for:
      - Post-surgical rehabilitation
      - Stroke recovery
      - Pain management
      - Improved mobility and independence.`,
    },
    {
      question: "When do you need Physiotherapy at Home?",
      answer: `If a patient is suffering from any of the following, or any other physical pain:
      - Post Surgical Rehab
      - Post Fracture Rehab
      - Stroke or Paralysis
      - Parkinson's Disease
      - Cerebral Palsy, Delayed Milestones
      - Pediatric Neurological Disorders
      - Geriatric Neurological Disorders
      - Frozen Shoulder
      - Sports Injuries
      - Age-related Balance Problems
      - Muscle or Joint Pain`,
    },
    {
      question: "How do I book Physiotherapy at Home Service?",
      answer: `You can book through any of the following:
      1. Click to call our office number.
      2. Book an appointment through our portal.

      Contact us at +977 9764399112
  +977 9708476971`,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-4xl font-bold text-[#005A9C] mb-6 text-center"
          data-aos="fade-down"
        >
          About Physiocare
        </h2>
        <div className="space-y-8">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="text-xl font-bold text-[#005A9C] mb-4">
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPhysiocare;
