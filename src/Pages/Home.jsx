import React, { useEffect, useRef } from 'react'
import Slides from '../Components/Slides'
import { FaYoutube,FaUserPlus, FaChild, FaChalkboardTeacher, FaDonate , FaTelegramPlane, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import "../App.css"
import CountUp from 'react-countup';
import { motion } from "framer-motion"
import { FaHandHoldingHeart } from "react-icons/fa"
import trip from "../assets/Images/trip.jpeg"
import teach from "../assets/Images/teach.png"
import donation from "../assets/Images/donation.png"
import lifetraining from "../assets/Images/lifetraining.png"

import { Link } from 'react-router-dom';
import VisitorMessage from '../Components/VisitorMessage';
import Slideshow from '../Components/Slideshow';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const statsData = [
  { end: 1000, label: 'Children Helped' },
  { end: 500, label: 'Volunteers' },
  { end: 200, label: 'Daily Meals' },
  { end: 50, label: 'Programs' },
  { end: 20, label: 'Locations' }
]

const Home = () => {
  const fadeRefs = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            entry.target.classList.remove('fade-in-enter')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    fadeRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      fadeRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  useGSAP(() => {
    gsap.fromTo(".box",
      { y: 100, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        stagger: {
          amount: 0.5,
          from: "start"
        }
      }
    )
  }, [])
  const features = [
    {
      icon: FaChild,
      title: "Protect Our Kids",
      description: "Dedicated to ensuring a safe and nurturing environment for children everywhere",
      color: "#399918",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Shape Our Kids",
      description: "Provide educational resources and support to help children thrive",
      color: "#FCCD2A",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Support Our Kids",
      description: "Offering comprehensive care including food, shelter, and medical assistance",
      color: "#EB8317",
    },
  ]

  return (
    <div className='bg-white'> 
      <Slideshow  num={1}/>
      <div className='container mx-auto px-4 -mt-20 relative z-10'>
        <div className='grid md:grid-cols-3 gap-6'>
          <motion.div 
            className='box bg-[#399918] rounded-xl shadow-xl overflow-hidden'
            whileHover={{ y: -14, transition: { duration: 0.2 } }}
          >
            <div className='p-8 text-white text-center'>
              <FaHeart className='mx-auto text-5xl mb-4' />
              <h2 className='text-2xl font-bold mb-4'>Visit Us</h2>
              <p className='mb-6 text-white/90'>
                In Addis Ababa, Saris Adey Ababa, near the Total fuel station
              </p>
              <Link 
                to='/about-us'
                className='inline-block px-6 py-3 border-2 border-white rounded-full
                         hover:bg-white hover:text-[#399918] transition-all duration-300'
              >
                Read More
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className='box bg-[#FCCD2A] rounded-xl shadow-xl overflow-hidden'
            whileHover={{ y: -14, transition: { duration: 0.2 } }}
          >
            <div className='p-8 text-gray-800 text-center'>
              <FaUserPlus className='mx-auto text-5xl mb-4' />
              <h2 className='text-2xl font-bold mb-4'>Join Us</h2>
              <p className='mb-6'>
                Volunteer your time, labor, and ideas to make a difference
              </p>
              <Link 
                to='/join-us'
                className='inline-block px-6 py-3 border-2 border-gray-800 rounded-full
                         hover:bg-gray-800 hover:text-[#FCCD2A] transition-all duration-300'
              >
                Join Now
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className='box bg-[#EB8317] rounded-xl shadow-xl overflow-hidden'
            whileHover={{ y: -14, transition: { duration: 0.2 } }}
          >
            <div className='p-8 text-white text-center'>
              <FaDonate className='mx-auto text-5xl mb-4' />
              <h2 className='text-2xl font-bold mb-4'>Donate Online</h2>
              <p className='mb-6'>
                CBE: 1000278927892<br />
                Telebirr: 0909090909
              </p>
              <Link 
                to='/donate'
                className='inline-block px-6 py-3 border-2 border-white rounded-full
                         hover:bg-white hover:text-[#EB8317] transition-all duration-300'
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
   {/* Contact Bar */}
   <div className='bg-white shadow-md mt-12 py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center gap-4 text-gray-600'>
              <span>Tel: +251902404444</span>
              <span className='hidden md:block'>•</span>
              <span>askalcharityassociation@gmail.com</span>
            </div>
            <div className='flex gap-6 mt-4 md:mt-0'>
              {[
                { icon: FaYoutube, color: '#FF0000', link: 'https://youtube.com' },
                { icon: FaTelegramPlane, color: '#0088cc', link: 'https://telegram.org' },
                { icon: FaTiktok, color: '#000000', link: 'https://tiktok.com' },
                { icon: FaFacebookF, color: '#1877F2', link: 'https://facebook.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className='transition-colors duration-300'
                  style={{ color: social.color }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    <section className="py-24 bg-gradient-to-b from-white to-[#399918]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#399918] mix-blend-multiply opacity-20"></div>
            <img
              src={trip || "/placeholder.svg"}
              alt="Children playing"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#399918] mb-4">Investing in Hope</h2>
              <div className="w-24 h-1 bg-[#FCCD2A] rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to empower vulnerable children by providing essential resources like food, shelter,
                medical care, and education. We aim to protect them from harm and create a safe environment for their
                growth. By sharing what we have, we help them realize their potential.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg transform transition-transform group-hover:scale-105"></div>
                  <div className="relative p-6 text-center">
                    <div className="mb-4 inline-block">
                      <div
                        className="p-3 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <feature.icon
                          size={40}
                          className="transition-colors duration-300"
                          style={{ color: feature.color }}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  {/* Stats Section */}
  <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='text-center'
            >
              <CountUp
                end={stat.end}
                duration={2.5}
                className='text-5xl font-bold text-[#399918]'
              />
              <p className='text-gray-600 mt-2'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
{/* What We're Doing Section */}
<div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-[#399918] mb-12'>
            What we're Doing
          </h2>
          <motion.div
            ref={el => fadeRefs.current[1] = el}
            className='grid md:grid-cols-3 gap-8'
          >
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
        </motion.div>
          <div className='text-center mt-12'>
            <Link
              to='/about-us'
              className='inline-block px-12 py-4 bg-[#399918] text-white rounded-full
                       hover:bg-[#2d7313] transition-colors duration-300'
            >
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </div>
      <VisitorMessage />
      </div>
    )
  }

  export default Home