import React from 'react'
import Slides from './Slides'
import { FaYoutube, FaTelegramPlane, FaTiktok, FaFacebookF } from 'react-icons/fa';
import CountUp from 'react-countup';

import tripp from "../assets/Images/tripp.jpeg"
import teach from "../assets/Images/teach.png"
import donation from "../assets/Images/donation.png"
import lifetraining from "../assets/Images/lifetraining.png"

import { Link } from 'react-router-dom';
import VisitorMessage from '../Components/VisitorMessage';

const Home = () => {
  return (
    <div>
      <Slides num={1} />
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
      <div className=' shadow-lg lg:mx-72 pb-5 max-md:mx-5 rounded-xl my-5'>
        <img src={tripp}  className='max-w-full  rounded-t-xl  ' />
        <div className='flex justify-between'>
          <p className='p-5 font-bold max-md:text-2xl lg:text-3xl'>Investing in Hope</p>
          <Link to='/about-us' className=' bg-[#72BF78] my-5 px-5 pt-1 lg:mx-2 max-md:mx-1 text-white rounded-xl'>Learn More</Link>
        </div> 
        <p className='p-5 m-5 rounded-xl bg-[#D9D9D9]'>Our mission is to empower vulnerable children by providing essential resources like food, shelter, medical care, and education. We aim to protect them from harm and create a safe environment for their growth. By sharing what we have, we help them realize their potential. Our efforts today ensure these children can become responsible citizens. Together, we shape a brighter future for all.</p>               
      </div>
      <div className=' flex lg:space-x-10 max-md:space-x-7 max-md:mx-5 lg:mx-96'>
        <div>
          <CountUp end={1000} className='lg:text-6xl max-md:text-3xl font-bold '/>
          <p className='text-4xl mt-2 text-center text-gray-600'>Kids</p>
        </div>
        <div className="bg-black w-1 h-10 mt-8 rounded-3xl "></div>
        <div>
          <CountUp end={1000} className='lg:text-6xl max-md:text-3xl font-bold '/>
          <p className='text-4xl mt-2 text-center text-gray-600'>Kids</p>
        </div>
        <div className="bg-black w-1 h-10 mt-8 rounded-3xl "></div>
        <div>
          <CountUp end={1000} className='lg:text-6xl max-md:text-3xl font-bold '/>
          <p className='text-4xl text-center mt-2 text-gray-600'>Kids</p>
        </div>
      </div>
      <hr class=" lg:mx-96 max-md:mx-20 h-1 rounded-3xl bg-gray-400 my-4" />
      <p className='lg:mx-72 max-md:mx-5 text-2xl mt-16 text-gray-600 font-bold'>What we’re Doing</p>
      <div className='lg:flex lg:mx-72 max-md:mx-5 py-5 lg:space-x-6 '>
        <div>
          <img src={teach} className="mb-10 rounded-xl" alt="" />
          <img src={donation} className='max-md:mb-10 rounded-xl' alt="" />
        </div>
      <div>
        <img src={lifetraining} className='inline rounded-xl h-full' alt="" />
      </div>
      </div>
      <Link className='mx-72 max-md:mx-5 text-[#921919] font-bold underline text-lg' to='/about-us'>Learn More</Link>
      
      <VisitorMessage />
      </div>
    )
  }

  export default Home