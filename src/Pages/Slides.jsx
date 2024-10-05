import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import us from '../assets/Images/us.jpeg';
import gift from '../assets/Images/gift.jpeg';
import trip from '../assets/Images/trip.jpeg';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'cover',
  height: '350px',
  opacity: 1,
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  zIndex: 1,
};

const slideImages = [
  {
    url: us,
    
  },
  {
    url: gift,
    
  },
  {
    url: trip,

  },
];

const Slides = () => {
  return (
    <div className="slide-container">
      <Slide  prevArrow={null} 
        nextArrow={null}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div style={overlayStyle}></div>
            </div>
          </div>
        ))}
      </Slide>
      
    </div>
    
  );
};

export default Slides;
