"use client"
import { motion } from "framer-motion"
import Gallery from "../Components/Gallery"
import { FaGraduationCap, FaHandHoldingHeart, FaUsers, FaSeedling } from "react-icons/fa"
import us from "../assets/Images/us.jpeg"
import member2 from "../assets/Images/BM_abelgizaw.jpg"
import member1 from "../assets/Images/BM_belayniguse.jpg"
import member4 from "../assets/Images/BM_hamelmalmekuria.jpg"
import member3 from "../assets/Images/BM_zeynebashifa.jpg"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
  const { t } = useTranslation()
  const helpingPoints = [
    {
      icon: FaSeedling,
      text: t("help_1"),
    },
    {
      icon: FaUsers,
      text: t("help_2"),
    },
    {
      icon: FaHandHoldingHeart,
      text: t("help_3"),
    },
    {
      icon: FaGraduationCap,
      text: t("help_4"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-green-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-green-600 opacity-90"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t("aboutUs")}</h1>
          <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={us || "/placeholder.svg"} alt="About Us" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-green-600">{t("place_for_kids")}</h2>
            <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-sm">{t("focus")}</p>
            <p className="text-gray-600 leading-relaxed text-sm">{t("vision")}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-8 text-center">{t("how_help")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <point.icon className="text-green-600 text-lg" />
                </div>
                <p className="text-gray-600 text-sm">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-green-600 mb-8 text-center">{t("our_gallery")}</h2>
          <Gallery />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 mt-12"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-8 text-center">{t("board_members")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: t("BM_name.0"),
                role: t("BM_role.0"),
                email: "belobelay@gmail.com",
                img: member1,
              },
              {
                name: t("BM_name.1"),
                role: t("BM_role.1"),
                email: "abelgizaw600@gmail.com",
                img: member2,
              },
              {
                name: t("BM_name.2"),
                role: t("BM_role.2"),
                email: "zeynebashi.10@gmail.com",
                img: member3,
              },
              {
                name: t("BM_name.3"),
                role: t("BM_role.3"),
                email: "hemimekuria88@gmail.com",
                img: member4,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 flex flex-col items-center text-center p-5"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-3 border-green-200">
                  <img
                    src={member.img || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-green-600">{member.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-auto inline-block px-3 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  {t("contact_us")}
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
