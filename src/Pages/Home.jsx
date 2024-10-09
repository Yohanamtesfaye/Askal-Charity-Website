import React, { useEffect, useRef } from 'react'
import Slides from './Slides'
import { FaYoutube,FaUserPlus, FaChild, FaChalkboardTeacher, FaDonate , FaTelegramPlane, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import "../App.css"
import CountUp from 'react-countup';

import trip from "../assets/Images/trip.jpeg"
import teach from "../assets/Images/teach.png"
import donation from "../assets/Images/donation.png"
import lifetraining from "../assets/Images/lifetraining.png"

import { Link } from 'react-router-dom';
import VisitorMessage from '../Components/VisitorMessage';
import Slideshow from '../Components/Slideshow';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Home = () => {
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
      <Slideshow  num={1}/>
      <div className='lg:flex justify-center lg:mx-16 space-y-5 lg:space-y-0 box text-white'>
  {/* Visit Us Section */}
  <div className='bg-[#EB8317] box flex flex-col items-center justify-center px-10 py-20 w-full lg:w-1/3'>
    <FaHeart size={50} className='mb-5' />
    <h1 className='text-xl font-bold text-center mb-4'>Visit Us</h1>
    <p className='text-center mb-7'>In Addis Ababa, Saris Adey Ababa, near the Total fuel station, on the 2nd floor of the Dawit Building</p>
    <Link to='/about-us' className='border-2 hover:bg-white hover:text-[#55AD9B] font-bold text-center px-5 py-2 text-white rounded-sm'>Read More</Link>
  </div>

  {/* Join Us Section */}
  <div className='bg-[#FCCD2A] box flex flex-col items-center justify-center px-10 py-20 w-full lg:w-1/3'>
    <FaUserPlus size={50} className='mb-5' />
    <h1 className='text-xl font-bold text-center mb-4'>Join Us</h1>
    <p className='text-center mb-7'>You can help by volunteering your time, labor, and ideas.</p>
    <Link to='/join-us' className='border-2 hover:bg-white hover:text-[#55AD9B] font-bold text-center px-5 py-2 text-white rounded-sm'>Read More</Link>
  </div>

  {/* Donate Section */}
  <div className='bg-[#399918] box flex flex-col items-center justify-center px-10 py-20 w-full lg:w-1/3'>
    <FaDonate size={50} className='mb-5' />
    <h1 className='text-xl font-bold text-center mb-4'>Donate Online</h1>
    <p className='text-center mb-7'>
      CBE: 10002789278927927<br />
      Telebirr: 090909090909090
    </p>
    <Link to='/donate' className='border-2 hover:bg-white hover:text-[#55AD9B] font-bold text-center px-5 py-2 text-white rounded-sm'>DONATE</Link>
  </div>
</div>

      <div className="lg:flex justify-between lg:mx-72 font-semibold lg:py-5 lg:mt-3">
          <div className="lg:flex max-md:mx-10 max-md:text-center max-md:py-2 text-xl lg:space-x-3">
            <p>Tel: +251902404444</p>
            <div className="bg-black w-0.5 h-4 mt-1 lg:block hidden  rounded-3xl "></div>
            <p>askalcharityassociation@gmail.com</p>
          </div>
          <div className="flex max-md:justify-center max-md:items-center space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={30} color="#0088cc" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={30} color="#000000" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} color="#1877F2" />
            </a>
          </div>
      </div>
      <div ref={el => fadeRefs.current[0] = el}  className='lg:flex fade-in-enter invest space-x-5 lg:ml-24 lg:mr-10 pb-5 max-md:mx-5 rounded-xl my-5'>
        <div > 
         <img src={trip} width={3000}  className=' rounded-xl  ' />
        </div>
        <div className='lg:p-5 mt-5'>
            <p className=' font-bold text-[#72BF78] max-md:text-2xl lg:text-4xl '>Investing in Hope</p>
            <p className='leading-8 text-gray-500 mt-5'>Our mission is to empower vulnerable children by providing essential resources like food, shelter, medical care, and education. We aim to protect them from harm and create a safe environment for their growth. By sharing what we have, we help them realize their potential.  </p>   
            <div className='flex mt-5 justify-between'>
              <div className='mb-6 mr-4'>
                <FaChild size={50} className='text-[#72BF78] ml-12 mb-2  border-2 border-[#72BF78] p-1 rounded-full' />
                <p className=' text-xl  font-bold'>Protect Our Kids</p>
                <p className='leading-6 text-gray-500'>Dedicated to ensuring a safe and nurturing  environment for children everywhere</p>
              </div>
              <div>
                <FaChalkboardTeacher size={50} className='text-[#72BF78] ml-10 mb-2 border-2 border-[#72BF78] p-1 rounded-full' />
                <p className=' text-xl font-bold'>Shape Our Kids</p>
                <p className='leading-6 text-gray-500 mb-5'>Provide educational resources, and support to help children thrive</p>
              </div>
            </div>
              
        </div> 
      </div>
        
    
      <div className=' lg:flex  text-center max-md:space-y-3 lg:space-x-6 max-md:space-x-7 max-md:mx-5 lg:mx-44'>
        <div>
          <CountUp end={1000} className='text-6xl  text-[#72BF78]  font-bold '/>
          <p className='lg:lg:text-4xl ml-3 max-md:text-2xl max-md:ml-5  text-center text-gray-600'>Kids</p>
        </div>
        <div className="bg-black block max-md:hidden w-1 h-10 mt-8 rounded-3xl "></div>
        <div>
          <CountUp end={1000} className='text-6xl text-[#72BF78] font-bold  '/>
          <p className='text-4xl lg:ml-3 max-md:text-2xl mt-2 text-center text-gray-600'>Kids</p>
        </div>
        <div className="bg-black block max-md:hidden w-1 h-10 mt-8 rounded-3xl "></div>
        <div>
          <CountUp end={1000} className='text-6xl text-[#72BF78]  font-bold  '/>
          <p className='lg:text-4xl lg:ml-3 max-md:text-2xl text-center mt-2 text-gray-600'>Kids</p>
        </div>
        <div className="bg-black block max-md:hidden w-1 h-10 mt-8 rounded-3xl "></div>
        <div>
          <CountUp end={1000} className='text-6xl text-[#72BF78]  font-bold  '/>
          <p className='lg:text-4xl lg:ml-3 max-md:text-2xl text-center mt-2 text-gray-600'>Kids</p>
        </div>
        <div className="bg-black block max-md:hidden w-1 h-10 mt-8 rounded-3xl "></div>
        <div>
          <CountUp end={1000} className='text-6xl text-[#72BF78] font-bold  '/>
          <p className='lg:text-4xl ml-3 max-md:text-2xl text-center mt-2 text-gray-600'>Kids</p>
        </div>
      </div>
      <hr class=" lg:mx-96 max-md:mx-20 h-1 rounded-3xl bg-gray-400 my-4" />
      <p className='lg:px-40 text-[#72BF78] bg-[#F5F5F5]  pt-5 max-md:mx-5 text-4xl py-7 mt-16  font-bold '>What we’re Doing</p>
      <div ref={el => fadeRefs.current[1] = el} className='lg:flex  bg-[#F5F5F5] pb-10  lg:px-32 max-md:mx-5 py-5 lg:space-x-6 fade-in-enter mb-10'>
        <div>
          <img src={teach} className="mb-10 rounded-xl  hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300" alt="" />
          <img src={donation} className='max-md:mb-10 hover:-translate-y-2 hover:shadow-2xl transition-transform  rounded-xl' alt="" />
        </div>
      <div>
        <img src={lifetraining} className='inline hover:-translate-y-2 hover:shadow-2xl transition-transform  rounded-xl h-full' alt="" />
      </div>
      <div >
          <img src={teach} className="mb-10 hover:-translate-y-2 hover:shadow-2xl transition-transform  rounded-xl" alt="" />
          <img src={donation} className='max-md:mb-10 hover:-translate-y-2 hover:shadow-2xl transition-transform MB  rounded-xl' alt="" />
        </div>
      </div>
        
      <Link to='/about-us' className=' bg-[#72BF78] lg:ml-96 lg:px-44 px-10 py-3 lg:mx-2 max-md:mx-1 max-md:ml-14  font-bold hover:bg-[#a4f3ab] text-white rounded-md'>EXPLORE MORE </Link>   
      
      <VisitorMessage />
      </div>
    )
  }

  export default Home