import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import us from '../assets/Images/us.jpeg';
import gift from '../assets/Images/gift.jpeg';
import trip from '../assets/Images/trip.jpeg';
import basic from '../assets/Images/basic.jpeg';
import bag from '../assets/Images/bag.jpeg';
import wedo from '../assets/Images/wedo.jpeg';
import vol from '../assets/Images/vol.jpeg';
import teachers from '../assets/Images/teachers.jpeg';
import vector from '../assets/Images/Vector.png';
import vector2 from '../assets/Images/Vector2.png';



const Slides = ({num, text}) => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat',  
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    zIndex: 1,
  };

  let slideImages = [];

  switch(num) {
    case 1:
      slideImages = [
        { url: us },
        { url: gift },
        { url: trip },
      ];
      break;
    case 2:
      slideImages = [
        { url: wedo },
        { url: bag },
        { url: basic },
      ];
      break;
    case 3:
      slideImages = [
        { url: vol },
        { url: teachers },
      ];
      break;
    default:
      break;
  }

  return (
    <div className="slide-container">
      <Slide prevArrow={null} nextArrow={null}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div style={overlayStyle}></div>
              <div style={{ zIndex: 2, color: 'white',  }}>
                
               {num == 1 && <div className='max-md:mx-20'> <img className='lg:block hidden t' src={vector} alt="" />  <h1 className='lg:text-6xl max-md:text-3xl lg:ml-16 text-center'> ባይኖረንም ያለንን እናካፍላለን!!</h1> <h1 className='text-center font-serif'>There can be no keener revelation of a society’s soul than the way in which it treats its children. </h1> <img className='lg:ml-[700px] lg:block hidden'  src={vector2} alt="" /> </div>} 
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slides;
