import React from 'react'

import cccImage from "../assets/ccc.jpeg";
import dddImage from "../assets/ddd.jpeg";
import eeeImage from "../assets/eee.jpeg";
import gggImage from "../assets/ggg.jpeg";
import image1 from "../assets/aob.png";
import image2 from "../assets/23.jpeg";
import image3 from "../assets/34.jpeg";
import image4 from "../assets/45.jpeg";
import image5 from "../assets/ta.png";
import image6 from "../assets/tb.jpeg";
import image7 from "../assets/tc.jpeg";
import image8 from "../assets/bob.png";
import ao from "../assets/ao.jpeg";
import bo from "../assets/bo.jpeg";
import co from "../assets/co.jpeg";
import doImage from "../assets/do.jpeg";
import LazyLoad from "react-lazyload";


const GalleryContent = () => {
  const images = [
      image1, image5, image2, cccImage, dddImage, eeeImage,
      gggImage, image3, image4, image7, image8, image6, ao, bo, co, doImage,
    ];
  
  return (
     <div className="bg-gray-50 py-12 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#034694] mb-6 text-center">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                  <LazyLoad
                    key={index}
                    height={200}
                    offset={100}
                    placeholder={<div className="bg-gray-200 h-full w-full"></div>}
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </LazyLoad>
                ))}
              </div>
            </div>
          </div>
  )
}

export default GalleryContent