import React, { useEffect, useRef } from 'react'
import Slides from '../Components/Slides'
import { FaYoutube,FaUserPlus, FaChild, FaChalkboardTeacher, FaDonate , FaTelegramPlane, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import "../App.css"
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

import hand from "../assets/Images/trip.jpeg"
import bag from "../assets/Images/teach.png"
import donation from "../assets/Images/donation.png"
import lifetraining from "../assets/Images/lifetraining.png"

import { Link } from 'react-router-dom';
import VisitorMessage from '../Components/VisitorMessage';
import Slideshow from '../Components/Slideshow';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Donate = () => { 
   const { t } = useTranslation();
  const fadeRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-in-enter');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const t1 = gsap.timeline();
  useGSAP(()=>{
    t1.fromTo(".box",{
      y:100,
      opacity:0
    },
  {
    y:-20,
    opacity:1,
    duration:1,
    delay:1.5,
    ease:'power1.inOut',
    stagger: {
      amount: 1,
      from: "start",
      grid:[0,1],
      ease:'power1.inOut'
      
    }
  },
  
)
  },

 
  [])
  return (
    <div className='bg-white'> 
      <Slideshow  num={2}/>
      <div className='lg:flex justify-center lg:mx-16 space-y-5 lg:space-y-0 box text-white'>
  {/* Visit Us Section */}
  <div className='bg-[#399918]  box flex flex-col items-center justify-center px-10 py-20 w-full lg:w-1/3 mx-4 rounded-lg shadow-md  text-center cursor-pointer transition-transform  duration-700 ease-in-out transform  hover:-translate-y-3'>
  <FaDonate size={50} className='mb-5' />
    <h1 className='text-xl font-bold text-center mb-4'>{t('daily_expense')}</h1>
    <p className='text-center mb-7'>$2/{t('person')}</p>
    <p className='text-center mb-7'>{t('daily_des')}</p>
    <Link to='/register' className='border-2 hover:bg-white hover:text-[#55AD9B] font-bold text-center px-5 py-2 text-white rounded-sm'>{t('register')}</Link>
  </div>

  {/* Join Us Section */}
  <div className='bg-[#FCCD2A] box flex flex-col items-center justify-center px-10 py-20 w-full lg:w-1/3 mx-4 rounded-lg shadow-md  text-center cursor-pointer transition-transform  duration-700 ease-in-out transform  hover:-translate-y-3'>
  <FaDonate size={50} className='mb-5' />
    <h1 className='text-xl font-bold text-center mb-4'>{t('monthly_expense')}</h1>
    <p className='text-center mb-7'>$80/{t('person')}</p>
    <p className='text-center mb-7'>{t('monthly_expense')}</p>  
    <Link to='/register' className='border-2 hover:bg-white hover:text-[#55AD9B] font-bold text-center px-5 py-2 text-white rounded-sm'>{t('register')}</Link>
  </div>

  {/* Donate Section */}
  <div className='bg-[#EB8317] box flex flex-col items-center justify-center px-10 py-20 w-full lg:w-1/3 mx-4 rounded-lg shadow-md  text-center cursor-pointer transition-transform  duration-700 ease-in-out transform  hover:-translate-y-3'>
    <FaDonate size={50} className='mb-5' />
    <h1 className='text-xl font-bold text-center mb-4'>{t('yearly_expense')}</h1>
    <p className='text-center mb-7'>$100/{t('person')}</p>
    <p className='text-center mb-7'>{t('yearly_expense')}</p>    
    <Link to='/register' className='border-2 hover:bg-white hover:text-[#55AD9B] font-bold text-center px-5 py-2 text-white rounded-sm'>{t('register')}</Link>
    </div>
  </div>
  <div ref={el => fadeRefs.current[2] = el} className="flex flex-col items-center bg-gray-100 py-10">
            
            <h2 className="text-green-600 text-3xl font-bold mb-8">{t('contribute')}</h2>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                
                <img src={bag} className="w-full h-48 object-cover"/>
               
                <div className="p-6">
                  <div className="bg-gray-200 rounded-full h-2 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    {t('cause_des')}
                  </p>
                  <Link  to="/register"><button className="bg-green-600 lg:ml-64 text-white px-4 py-2 rounded-lg  font-bold hover:bg-green-900 transition-all duration-300">
                   {t('donate')}
                  </button></Link>
                  
                </div>
              </div>

              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={hand} className="w-full h-48 object-cover" />
          
                <div className="p-6">
                  <div className="bg-gray-200 rounded-full h-2 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    {t('cause_des')}
                  </p>
                  <Link  to="/register"><button className="bg-green-600 lg:ml-64 text-white px-4 py-2 rounded-lg  font-bold hover:bg-green-900 transition-all duration-300 ">
                    {t('donate')}
                  </button></Link>
                  
                </div>
              </div>
            </div>
          </div>

    </div>
    
  );
};

export default Donate
