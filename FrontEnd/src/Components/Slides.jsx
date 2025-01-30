import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import basic from '../assets/Images/basic.jpeg';
import bag from '../assets/Images/bag.jpeg';
import wedo from '../assets/Images/wedo.jpeg';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'cover', 
  height: '100%', 
  width: '100%', 
  opacity: 1,
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1,
};

const slidesData = [
  {
    url: wedo,
    alt: 'WeDo product image',
  },
  {
    url: bag,
    alt: 'Bag product image',
  },
  {
    url: basic,
    alt: 'Basic product image',
  },
];

const Slides = () => {
  return (
    <div className="slide-container" style={{ height: '100%', width: '100%' }}>
      <Slide prevArrow={null} nextArrow={null}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slide.url})` }}>
              <div style={overlayStyle}></div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slides;
