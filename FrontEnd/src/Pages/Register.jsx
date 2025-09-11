"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import children from "../assets/Images/children.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaPhone, FaClock } from "react-icons/fa"

function Register() {
  const { t } = useTranslation()
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    often: "daily",
  })

  // Fetch data from the server
  useEffect(() => {
    axios
      .get("http://localhost:3031/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:3031/users", formData)
      .then((res) => {
        console.log("User added:", res.data)
        setData([...data, res.data])
        alert("Thanks for Helping!")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-50 flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("get_Satrtd")}</h2>
              <p className="text-gray-600">{t("enter_required")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("full_name")}</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("enter_name")}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("email")}</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("enter_email")}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("phone_number")}</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("enter_number")}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("how_often")}</label>
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    name="often"
                    value={formData.often}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="daily">{t("daily")}</option>
                    <option value="monthly">{t("monthly")}</option>
                    <option value="yearly">{t("yearly")}</option>
                  </select>
                </div>
              </div>

              <Link to="/login">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t("signup")}
                </motion.button>
              </Link>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-lime-500/20"></div>
          <img src={children || "/placeholder.svg"} className="w-full h-full object-cover" alt="Children" />
        </motion.div>
      </div>
    </div>
  )
}

export default Register
