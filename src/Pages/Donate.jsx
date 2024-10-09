import React, { useEffect, useState } from 'react'
import Slide_Donate from './Slide_Donate'
import hand from '../assets/Images/hand.png';
import bag from '../assets/Images/bag.jpeg';
import { Link } from 'react-router-dom';

const Donate = () => {
  
  return  (
    <div className="relative">
      {/* Slider/Background Section */}
      <div className="w-full h-64 sm:h-80 rounded-md shadow-lg shadow-gray-500 overflow-hidden">
        <Slide_Donate />
      </div>

      {/*  Cards */}
      <div className="  flex flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-36 py-8 sm:py-12 space-y-6 lg:space-y-0 lg:space-x-12 justify-center z-10">
        {/* Daily  */}
        <Link  to="/register"> <div className="mx-4 bg-green-600 p-12 rounded-lg shadow-md text-white text-center cursor-pointer transition-transform  duration-700 ease-in-out transform  hover:-translate-y-3">       
        <h3 className="text-2xl font-bold">Daily Expense</h3>
          <p className="text-3xl mt-4">$2/PERSON</p>
          <p className="mt-2">That means 100 Birr will be the daily expense of one person at Askal.</p>
        </div></Link>

        

        {/* Monthly  */}
        <Link  to="/register"> <div className="mx-4 bg-green-600 p-12 rounded-lg shadow-md text-white text-center cursor-pointer transition-transform  duration-700 ease-in-out transform  hover:-translate-y-3">       
          <h3 className="text-2xl font-bold">Monthly Expense</h3>
          <p className="text-3xl mt-4">$80/PERSON</p>
          <p className="mt-2">That means 100 Birr will be the daily expense of one person at Askal.</p>
        </div> </Link>
        

        {/* Yearly  */}
        <Link  to="/register"> <div className="mx-4 bg-green-600 p-12 rounded-lg shadow-md text-white text-center cursor-pointer transition-transform  duration-700 ease-in-out transform  hover:-translate-y-3">       
          <h3 className="text-2xl font-bold">Yearly Expense</h3>
          <p className="text-3xl mt-4">$1600/PERSON</p>
          <p className="mt-2">That means 100 Birr will be the daily expense of one person at Askal.</p>
        </div></Link>
        
      </div>
                <div className="flex flex-col items-center bg-gray-100 py-10">
            
            <h2 className="text-green-600 text-3xl font-bold mb-8">Contribute for our causes</h2>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                
                <img src={bag} className="w-full h-48 object-cover"/>
               
                <div className="p-6">
                  <div className="bg-gray-200 rounded-full h-2 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    Our mission is to bridge the support gap for children by developing a
                    strong, reliable system that ensures their needs are continuously
                    met. We aim to provide comprehensive support, including health.
                  </p>
                  <Link  to="/register"><button className="bg-green-600 lg:ml-64 text-white px-4 py-2 rounded-lg  font-bold hover:bg-green-900 transition-all duration-300">
                    Donate
                  </button></Link>
                  
                </div>
              </div>

              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={hand} className="w-full h-48 object-cover" />
          
                <div className="p-6">
                  <div className="bg-gray-200 rounded-full h-2 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    Our mission is to bridge the support gap for children by developing a
                    strong, reliable system that ensures their needs are continuously
                    met. We aim to provide comprehensive support, including health.
                  </p>
                  <Link  to="/register"><button className="bg-green-600 lg:ml-64 text-white px-4 py-2 rounded-lg  font-bold hover:bg-green-900 transition-all duration-300 ">
                    Donate
                  </button></Link>
                  
                </div>
              </div>
            </div>
          </div>

    </div>
  );
};


export default Donate