import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import custom styles
import gift from '../assets/Images/gift.jpeg';
import basic from '../assets/Images/basic.jpeg';
import trip from '../assets/Images/trip.jpeg';
import vector from '../assets/Images/vector.png'; 
import vector2 from '../assets/Images/vector2.png';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Slideshow = ({ num }) => {
  useGSAP(()=>{
    gsap.fromTo('.intro', {
      opacity:0,
      y:-100
    },
  {
    opacity:1,
    y:0,
    delay:1,
    ease:'power1.inOut',
    stagger:1
  })
  } , [])
  let images = [];

  switch (num) {
    case 1:
      images = [gift, basic, trip];
      break;
    case 2:
      images = [gift, basic, trip];
      break;
    default:
      images = [gift];
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          {/* Text that will appear on the image with the animation */}
          <div className="slide-text">
            {num === 1 && index === currentIndex && (
              <div>
               
              
              </div>
            )}
          </div>
          
        </div>
      ))}

      {num === 1 && (
        <div style={{ zIndex: 2, color: 'white' }}>
          <div className='max-md:mx-10 intro'>
            <img className='lg:block hidden' src={vector} alt="Vector 1" />
            <h1 className='lg:text-8xl max-md:text-5xl lg:ml-10 text-center'>
                  ባይኖረንም ያለንን እናካፍላለን!!
                </h1>
                <h1 className='text-center max-md:text-md max-md:mb-10 mt-3 lg:text-3xl font-serif'>
                  There can be no keener revelation of a society’s soul than <br /> the way in which it treats its children.
                </h1>
            <img className='lg:ml-[1000px] mb-24 lg:block hidden' src={vector2} alt="Vector 2" />
            <Link to='/about-us' className='lg:px-20 max-md:px-5 max-md:ml-20 text-center hover:bg-white  hover:text-[#399918] lg:mx-96 py-6 bg-[#399918] rounded-xl font-bold text-xl '> OUR STORY </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
