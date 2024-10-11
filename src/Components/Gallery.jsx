import React from 'react';
import { Link } from 'react-router-dom';

import teach from "../assets/Images/teach.png";
import donation from "../assets/Images/donation.png";
import lifetraining from "../assets/Images/lifetraining.png";

const Gallery = () => {
  const images = [
    { src: teach, alt: "Teach Kids", caption: "Teach Kids", prop: 1 },
    { src: donation, alt: "Donations", caption: "Donations", prop: 2 },
    { src: lifetraining, alt: "Life Training", caption: "Life Training", prop: 3 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Link
            key={index}
            to={`/more/${image.prop}`}  
          >
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
                <p className="text-white text-lg font-medium m-4">{image.caption}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
