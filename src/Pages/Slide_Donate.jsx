import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import basic from '../assets/Images/basic.jpeg';
import bag from '../assets/Images/bag.jpeg';
import us from '../assets/Images/gift.jpeg';

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
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1,
};

// Define text style for the captions
const textStyle = {
  zIndex: 2,
};

const slideImages = [
  {
    url: us,
    caption: `"Spread Joy: Give the Gift of Health and Hope"`,
  },
  {
    url: bag,
    caption: 'We Share What We Have!',
  },
  {
    url: basic,
    caption: '"Spread Joy: Give the Gift of Health and Hope"',
  },
];

const Slide_Donate = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div style={overlayStyle}></div>
              <span className="text-white leading-relaxed lg:text-4xl font-bold font-spci m-10" style={textStyle}>
                {slideImage.caption}
              </span>
            </div>
          </div>
        ))}
      </Slide>
       
      <style jsx>{`
        .react-slideshow-container .prev,
        .react-slideshow-container .next {
          display: none; /* Hides the arrows */
        }
      `}</style>
    </div>
  );
};

export default Slide_Donate;
