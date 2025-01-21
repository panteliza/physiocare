import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aaaImage from '../assets/aaa.jpeg';
import bbbImage from '../assets/bbb.jpeg';
import cccImage from '../assets/ccc.jpeg';
import dddImage from '../assets/ddd.jpeg';
import eeeImage from '../assets/eee.jpeg';
import fffImage from '../assets/fff.jpeg';
import gggImage from '../assets/ggg.jpeg';
import hhhImage from '../assets/hhh.jpeg';
import iiiImage from '../assets/iii.jpeg';
import jjjImage from '../assets/jjj.jpeg';
import kkkImage from '../assets/kkk.jpeg';
import lllImage from '../assets/lll.jpeg';
import mmmImage from '../assets/mmm.jpeg';
import image1 from '../assets/12.jpeg';
import image2 from '../assets/23.jpeg';
import image3 from '../assets/34.jpeg';
import image4 from '../assets/45.jpeg';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, []);

  const images = [
    image1, image2,bbbImage, cccImage, dddImage, eeeImage, fffImage,
    gggImage,   kkkImage, lllImage, mmmImage,image3,image4
  ];

  return (
    <div className="pt-[70px]">
      {/* Navbar */}
      <Navbar />

      {/* Gallery Content */}
      <div className="bg-gray-50 py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#034694] mb-6 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
