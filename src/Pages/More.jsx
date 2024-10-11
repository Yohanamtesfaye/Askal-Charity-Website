import React from 'react';
import { useParams } from 'react-router-dom';

import teach from "../assets/Images/teach.png";
import donation from "../assets/Images/donation.png";
import lifetraining from "../assets/Images/lifetraining.png";

const More = () => {
  const { id } = useParams();  
  const imagesMap = {
    1: [
      { src: teach, alt: "Teach Kids" },
      { src: teach, alt: "Teach Kids" },
    ],
    2: [
      { src: donation, alt: "Donations" },
      { src: donation, alt: "Donations" },
    ],
    3: [
      { src: lifetraining, alt: "Life Training" },
    ],
   
  };

  const imagesToShow = imagesMap[id] || [];

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="text-green-600 font-inter text-2xl sm:text-3xl font-medium mb-6 text-center lg:text-left">
      <h2 className="text-2xl mb-6">More Images</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagesToShow.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
