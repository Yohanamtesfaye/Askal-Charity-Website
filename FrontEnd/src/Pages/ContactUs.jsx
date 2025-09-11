"use client"

import { useState } from "react"
import { MdEmail } from "react-icons/md"
import { FaPhone, FaMapMarkerAlt, FaClock, FaUser, FaEnvelope, FaComment } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const ContactUs = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-50">
      <div className="py-12 text-center text-green-600">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-balance">{t("contact_us1")}</h1>
        <p className="text-green-700 text-lg">{t("hear_from_you")}</p>
        <div className="mt-6 w-20 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="lg:flex lg:gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/5 bg-gradient-to-br from-green-600 to-green-700 p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-lime-400 rounded-full opacity-10 transform translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-lime-400 to-green-400 rounded-full opacity-10 transform -translate-x-10 translate-y-10"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-balance">{t("get_in_touch")}</h2>
              <p className="mb-8 text-green-100 leading-relaxed">{t("ready_to_make_difference")}</p>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4 group">
                  <div className="bg-green-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MdEmail className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1">{t("email_us")}</p>
                    <p className="text-green-200 hover:text-white transition-colors duration-300">
                      askalcharityassociation@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4 group">
                  <div className="bg-lime-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1">{t("address1")}</p>
                    <p className="text-green-200 leading-relaxed">{t("address_detail")}</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4 group">
                  <div className="bg-green-400 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaPhone className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1">{t("call_us")}</p>
                    <p className="text-green-200 hover:text-white transition-colors duration-300">+251 90 240 4444</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4 group">
                  <div className="bg-lime-400 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaClock className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1">{t("office_hours")}</p>
                    <p className="text-green-200">{t("office_hours_detail")}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:w-3/5 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("send_message")}</h3>
              <p className="text-gray-600">{t("fill_out_form")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                  {t("full_name1")}
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("full_name_ph")}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-800 mb-2">
                  {t("phone")}
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("phone_ph")}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  {t("email1")}
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("email_ph")}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  {t("msg")}
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t("msg_ph")}
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("send_msg")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
