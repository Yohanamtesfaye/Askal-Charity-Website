"use client"
import { useEffect, useRef } from "react"
// import { FaDonate } from "react-icons/fa"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import hand from "../assets/Images/trip.jpeg"
import bag from "../assets/Images/teach.png"
import { Link } from "react-router-dom"
import Slideshow from "../Components/Slideshow"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { FaLightbulb } from "react-icons/fa"; 
import { FaBullseye } from "react-icons/fa"; 
import { FaHandsHelping } from "react-icons/fa"; 

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

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">

          <motion.div
  className="box bg-green-600 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  whileHover={{ scale: 1.02 }}
>
  <div className="p-6 text-center">
    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <FaLightbulb className="text-2xl" /> {/* Vision icon */}
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mb-4">{t("Vision1.0")}</h1>

    {/* Bullet points */}
    <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left">
      <li>{t("Vision1.1")}</li>
      <li>{t("Vision1.2")}</li>
      <li>{t("Vision1.3")}</li>
      <li>{t("Vision1.4")}</li>
      <li>{t("Vision1.5")}</li>
      <li>{t("Vision1.6")}</li>
    </ul>
  </div>
</motion.div>


         <motion.div
  className="box bg-yellow-500 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  whileHover={{ scale: 1.02 }}
>
  <div className="p-6 text-center">
    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <FaBullseye className="text-2xl" /> {/* Mission icon */}
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mb-4">{t("Mission1.0")}</h1>

    {/* Bullet points */}
    <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left">
      <li>{t("Mission1.1")}</li>
    </ul>
  </div>
</motion.div>


          <motion.div
  className="box bg-orange-600 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  whileHover={{ scale: 1.02 }}
>
  <div className="p-6 text-center">
    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <FaHandsHelping className="text-2xl" /> {/* Purpose icon */}
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mb-4">{t("Purpose1.0")}</h1>

    {/* Bullet points */}
    <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left">
      <li>{t("Purpose1.1")}</li>
      <li>{t("Purpose1.2")}</li>
      <li>{t("Purpose1.3")}</li>
      <li>{t("Purpose1.4")}</li>
      <li>{t("Purpose1.5")}</li>
      <li>{t("Purpose1.6")}</li>
    </ul>
  </div>
</motion.div>


        </div>
      </div>

              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={hand} className="w-full h-48 object-cover" />
          
                <div className="p-6">
                  <div className="bg-gray-200 rounded-full h-2 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    {t('cause_des')}
                  </p>
                  <div className='flex justify-end '>
                    <Link  to="/register"><button className="  bg-green-600  text-white px-8 py-2 rounded-lg  font-bold hover:bg-green-900 transition-all duration-300">
                                       {t('donate')}
                                      </button></Link>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>

    </div>
    
  );
};

export default Donate
