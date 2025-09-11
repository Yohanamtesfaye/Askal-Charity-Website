"use client"
import Slideshow from "../Components/Slideshow"
import { motion } from "framer-motion"
import vol from "../assets/Images/vol.jpg"
import RegistrationForm from "../Components/VolunteerRegisteration"
import { useTranslation } from "react-i18next"

const Voulenteer = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="h-[60vh] overflow-hidden">
        <Slideshow num={3} />
      </div>
      <div>
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl h-80"
              >
                <div className="absolute inset-0 bg-green-600 mix-blend-multiply opacity-20"></div>
                <img src={vol || "/placeholder.svg"} alt="Children playing" className="w-full h-full object-cover" />
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">{t("invest_hope")}</h2>
                  <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6"></div>
                  <p className="text-gray-600 leading-relaxed">{t("our_mission")}</p>
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
