import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import gift from '../assets/Images/gift.jpeg';
import basic from '../assets/Images/basic.jpeg';
import trip from '../assets/Images/trip.jpeg';
import certified from '../assets/Images/certified.jpg';
import us from '../assets/Images/us.jpeg';
import vol from '../assets/Images/vol.jpg';
import volunt from '../assets/Images/volunt.jpg';
import volll from '../assets/Images/volll.jpg';
import volun from '../assets/Images/volun.jpg';
import voulnteer from '../assets/Images/volunteer.jpg';
import voul from '../assets/Images/voul.jpg';
import { useTranslation } from 'react-i18next';
const Slideshow = ({ num }) => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Define different slide sets for each `num` value
  const slideSets = {
    1: [
      { image: gift, alt: 'Gift giving', text: 'ባይኖረንም ያለንን እናካፍላለን!!', description: t('homeintro1') },
      { image: basic, alt: 'Basic needs', text: 'Providing Basic Needs', description: t('homeintro2') },
      { image: trip, alt: 'Children trip', text: 'Creating Joyful Memories', description: t('homeintro3') },
    ],
    2: [
      { image: trip, alt: 'Children trip', text: 'Give a Little, Change a Lot', description: 'Your small contribution can make a big difference in a child\'s life.' },
      { image: us, alt: 'Gift giving', text: 'Spread Love and Kindness', description: 'We believe in sharing love and kindness with every child.' },
      { image: certified, alt: 'Basic needs', text: 'Support Their Future', description: 'Help us build a brighter future for vulnerable children.' },
    ],
    3: [
      { image: vol, alt: 'Children trip', text: 'Give a Little, Change a Lot', description: 'Your small contribution can make a big difference in a child\'s life.' },
      { image: volunt, alt: 'Gift giving', text: 'Spread Love and Kindness', description: 'We believe in sharing love and kindness with every child.' },
      { image: volll, alt: 'Basic needs', text: 'Support Their Future', description: 'Help us build a brighter future for vulnerable children.' },
    ],
    // Add more slide sets for other `num` values if needed
  };

  // Get the slides based on the `num` prop
  const slides = slideSets[num] || [];

  useGSAP(() => {
    gsap.fromTo('.intro-text',
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      }
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className='relative h-[80vh] overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='absolute inset-0'
        >
          <img
            src={slides[currentIndex]?.image || "/placeholder.svg"}
            alt={slides[currentIndex]?.alt}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>
      </AnimatePresence>

      
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-white px-4 ${num === 3 ? 'mt-20' : ''}`}>
            <motion.div
              className='intro-text text-center max-w-4xl mx-auto'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className='text-4xl md:text-7xl font-bold mb-6'>
              {slides[currentIndex]?.text}
              </h1>
              <p className='text-xl md:text-2xl mb-12 font-serif'>
              {slides[currentIndex]?.description}
              </p>
              {num != 3 && <Link
              to='/about-us'
              className='inline-block px-12 py-4 bg-[#399918] text-white rounded-full
                   text-lg font-semibold hover:bg-[#2d7313] transition-all duration-300
                   transform hover:scale-105'
              >
              OUR STORY
              </Link>}
            </motion.div>
            </div>
        
            {/* Slide indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
        { slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;