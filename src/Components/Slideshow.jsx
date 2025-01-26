import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import gift from '../assets/Images/gift.jpeg'
import basic from '../assets/Images/basic.jpeg'
import trip from '../assets/Images/trip.jpeg'
const Slideshow = ({ num }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
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
    )
  }, [])

  const slides = [
    { image: gift, alt: 'Gift giving' },
    { image: basic, alt: 'Basic needs' },
    { image: trip, alt: 'Children trip' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

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
            src={slides[currentIndex].image || "/placeholder.svg"}
            alt={slides[currentIndex].alt}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>
      </AnimatePresence>

      {num === 1 && (
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4'>
          <motion.div
            className='intro-text text-center max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className='text-4xl md:text-7xl font-bold mb-6'>
              ባይኖረንም ያለንን እናካፍላለን!!
            </h1>
            <p className='text-xl md:text-2xl mb-12 font-serif'>
              There can be no keener revelation of a society's soul than
              <br /> the way in which it treats its children.
            </p>
            <Link
              to='/about-us'
              className='inline-block px-12 py-4 bg-[#399918] text-white rounded-full
                       text-lg font-semibold hover:bg-[#2d7313] transition-all duration-300
                       transform hover:scale-105'
            >
              OUR STORY
            </Link>
          </motion.div>
        </div>
      )}
       {num === 2 && (
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4'>
          <motion.div
            className='intro-text text-center max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className='text-4xl md:text-7xl font-bold mb-6'>
               Give a little, change a lot
            </h1>
            <p className='text-xl md:text-2xl mb-12 font-serif'>
              There can be no keener revelation of a society's soul than
              <br /> the way in which it treats its children.
            </p>
            <Link
              to='/about-us'
              className='inline-block px-12 py-4 bg-[#399918] text-white rounded-full
                       text-lg font-semibold hover:bg-[#2d7313] transition-all duration-300
                       transform hover:scale-105'
            >
              OUR STORY
            </Link>
          </motion.div>
        </div>
      )}
      {/* Slide indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {slides.map((_, index) => (
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
  )
}

export default Slideshow