import React from 'react'
import { motion } from 'framer-motion'
import Slideshow from '../Components/Slideshow'
import Gallery from '../Components/Gallery'
import { FaGraduationCap, FaHandHoldingHeart, FaUsers, FaSeedling } from 'react-icons/fa'
import us from '../assets/Images/us.jpeg'
const AboutUs = () => {
  const helpingPoints = [
    {
      icon: FaGraduationCap,
      text: "Offering consistent educational support to children, helping them build foundational knowledge and skills."
    },
    {
      icon: FaSeedling,
      text: "Focusing on identifying and nurturing each child's unique talents, encouraging them to explore their strengths."
    },
    {
      icon: FaUsers,
      text: "Life training for parents and adults, focusing on nurturing and developing children."
    },
    {
      icon: FaHandHoldingHeart,
      text: "Offering financial assistance, food, and basic necessities to those in need."
    }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
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
              A Place for Kids to Grow
            </h2>
            <div className="w-20 h-1 bg-[#FCCD2A] rounded-full"></div>
            <p className="text-gray-600 leading-relaxed">
              The main focus of Askal Charity Organization is children. We aim to provide children with essential needs and offer support in health care, education, and skill development, ensuring they have a stable future.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to see all children nurtured in physical health, expanded in knowledge, and strengthened emotionally, so they can contribute to the country's lasting progress.
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
            How We're Helping
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

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#399918] mb-12 text-center">
            Our Gallery
          </h2>
          <Gallery />
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs
