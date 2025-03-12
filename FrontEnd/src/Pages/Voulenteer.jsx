import React from 'react'
import Slideshow from '../Components/Slideshow'
import { motion } from "framer-motion"
import vol from '../assets/Images/vol.jpg';
import RegistrationForm from '../Components/VolunteerRegisteration';
import { useTranslation } from 'react-i18next';
const Voulenteer = () => {
  const {t}= useTranslation();
  return (
    <div>
      <Slideshow num ={3}/>
      <div>
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
              src={vol || "/placeholder.svg"}
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#399918] mb-4">{t('invest_hope')}</h2>
              <div className="w-24 h-1 bg-[#FCCD2A] rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
              {t('our_mission')}
              </p>
            </motion.div>
          
          </div>
        </motion.div>
      </div>
    </section>
    <RegistrationForm />
      </div>
    </div>
  )
}

export default Voulenteer