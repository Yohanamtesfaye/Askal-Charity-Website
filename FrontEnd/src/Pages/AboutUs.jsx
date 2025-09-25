import React from 'react'
import { motion } from 'framer-motion'
import Slideshow from '../Components/Slideshow'
import Gallery from '../Components/Gallery'
import { FaGraduationCap, FaHandHoldingHeart, FaUsers, FaSeedling } from 'react-icons/fa'
import us from '../assets/Images/us.jpeg'
import member2 from '../assets/Images/BM_abelgizaw.jpg'
import member1 from '../assets/Images/BM_belayniguse.jpg'
import member4 from '../assets/Images/BM_biniam.jpg'
import member3 from '../assets/Images/BM_zeynebashifa.jpg'
import { useTranslation } from 'react-i18next';
import VisionMissionPurpose from "../Components/VisionMissionPurpose"

const AboutUs = () => {
  const {t}= useTranslation();
  const helpingPoints = [
    {
      icon: FaSeedling,
      text: t('help_1')
    },
    {
      icon: FaUsers,
      text: t('help_2')
    },
    {
      icon: FaHandHoldingHeart,
      text: t('help_3')
    },
    {
      icon: FaGraduationCap,
      text: t('help_4')
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#399918]/5 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-[#399918] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#399918] opacity-90"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('aboutUs')}</h1>
          <div className="w-24 h-1 bg-[#FCCD2A] rounded-full"></div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={us} alt="About Us" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#399918]">
             {t('place_for_kids')} 
            </h2>
            <div className="w-20 h-1 bg-[#FCCD2A] rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
             {t('focus')}            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('vision')}
            </p>
          </motion.div>
        </div>

        {/* How We're Helping Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-[#399918] mb-12 text-center">
            {t('how_help')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#399918]/10 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="text-[#399918] text-2xl" />
                </div>
                <p className="text-gray-600">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision, Mission, Purpose Section */}
        <VisionMissionPurpose />
        
        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#399918] mb-12 text-center">
            {t('our_gallery')}
          </h2>
          <Gallery />
        </motion.div>

                {/* Board Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 mt-16"
        >
          <h2 className="text-3xl font-bold text-[#399918] mb-12 text-center">
            {t('board_members')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: t('BM_name.0'),
                role: t('BM_role.0'),
                email: "belobelay@gmail.com",
                img: member1
              },
              {
                name: t('BM_name.1'),
                role: t('BM_role.1'),
                email: "abelgizaw600@gmail.com",
                img: member2
              },
              {
                name: t('BM_name.2'),
                role: t('BM_role.2'),
                email: "zeynebashi.10@gmail.com",
                img: member3
              },
              {
                name: t('BM_name.3'),
                role: t('BM_role.3'),
                email: "hemimekuria88@gmail.com",
                img: member4
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-6"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#399918]/30">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#399918]">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-auto inline-block px-4 py-2 rounded-xl bg-[#399918] text-white font-medium hover:bg-[#2d7512] transition-colors"
                >
                  {t('contact_us')}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>


        
      </div>
    </div>
  )
}

export default AboutUs
