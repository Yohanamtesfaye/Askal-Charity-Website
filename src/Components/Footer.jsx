import React from 'react'
import { FaYoutube, FaTelegramPlane, FaTiktok, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/Images/askallogo.jpg'
const Footer = () => {
  return (
    <div className='flex justify-center py-10 px-20 bg-[#222222] text-white'>
      <div >
        <img className='rounded-xl' src={logo} width={250} alt="" />
      </div>
      <div>
      <div className="lg:flex lg:px-20 mt-7 max-md:mx-10 max-md:text-center max-md:py-2 text-xl lg:space-x-3">
            <p>Tel: +251902404444</p>
            <div className="bg-black w-0.5 h-4 mt-1 lg:block hidden  rounded-3xl "></div>
            <p>askalcharityassociation@gmail.com</p>
          </div>
          <div className="flex px-20 mt-10 max-md:justify-center max-md:items-center space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={30} color="#0088cc" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={30} color="pink" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} color="#1877F2" />
            </a>
          </div>
          <div className='px-4 mx-8 mt-10 ml-16 pb-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1242755613744!2d38.7640207!3d8.960694799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b830059db1b61%3A0x5bb1f433372cad06!2sAskal%20Charity%20Association!5e0!3m2!1sen!2set!4v1719301886616!5m2!1sen!2set" ></iframe>
          </div>
      </div>
    </div>
  )
}

export default Footer