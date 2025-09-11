"use client"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import sente from "../assets/Images/sente.png"
import pep2 from "../assets/Images/pep2.avif"
import pep3 from "../assets/Images/pep3.png"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const VisitorMessage = () => {
  const { t } = useTranslation()

  const visitors = [
    {
      name: "Sentayehu Kefle",
      title: "Comedian",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: sente,
    },
    {
      name: "Visitor 2",
      title: "Musician",
      message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: pep2,
    },
    {
      name: "Visitor 3",
      title: "Actor",
      message:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
      img: pep3,
    },
  ]

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-3">{t("visitor_message")}</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visitors.map((visitor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={visitor.img || "/placeholder.svg"}
                  alt={visitor.name}
                  className="w-20 h-20 rounded-full border-3 border-green-600 object-cover"
                />
              </div>

              <FaQuoteLeft className="text-green-600 text-lg mx-auto mb-3" />
              <p className="text-gray-600 italic mb-3 text-sm leading-relaxed">{visitor.message}</p>
              <FaQuoteRight className="text-green-600 text-lg mx-auto mb-3" />

              {/* Name & Title */}
              <h3 className="text-lg font-bold text-green-600">{visitor.name}</h3>
              <p className="text-sm text-gray-500">{visitor.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisitorMessage
