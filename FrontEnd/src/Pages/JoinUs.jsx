

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import ContactUs from "./ContactUs"
import { FaHandshake } from "react-icons/fa"
import { UsersIcon } from "lucide-react"
import { FaStar } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"

const JoinUs = () => {
  const { t } = useTranslation()

  const [showMemberModal, setShowMemberModal] = useState(false)
  const [showSpecialFormModal, setShowSpecialFormModal] = useState(false)
  const [showFranchiseFormModal, setShowFranchiseFormModal] = useState(false)

  const [specialFormData, setSpecialFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    address: "",
    reason: "",
    membershipType: "specialmember",
  })

  const [franchiseFormData, setFranchiseFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    address: "",
    country: "",
    academicLevel: "",
    maritalStatus: "",
    reason: "",
    membershipType: "franchise",
  })

  const handleSubmit = async (e, formData, setFormData) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Registration successful!", data)
        // Reset form and close modal
        const emptiedForm = Object.fromEntries(
          Object.keys(formData).map((key) => [key, key === "membershipType" ? formData.membershipType : ""]),
        )
        setFormData(emptiedForm)
        if (formData.membershipType === "specialmember") {
          setShowSpecialFormModal(false)
        } else if (formData.membershipType === "franchise") {
          setShowFranchiseFormModal(false)
        }
      } else {
        console.error("Registration failed:", data.message)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleChange = (e, setFormData, formData) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const cards = [
    {
      type: t("volunteer1.4"),
      description: [t("volunteer1.0"), t("volunteer1.1"), t("volunteer1.2"), t("volunteer1.3")],
      gradient: "from-green-400 to-green-600",
      icon: <FaHandshake className="text-4xl" color="white" />,
      onClick: () => (window.location.href = "./volunteer"),
    },
    {
      type: t("member_option1.3"),
      description: [t("member_option1.0"), t("member_option1.1"), t("member_option1.2")],
      gradient: "from-yellow-400 to-yellow-500",
      icon: <UsersIcon className="text-4xl" color="white" />,
      onClick: () => setShowMemberModal(true),
    },
    {
      type: t("special_member1.3"),
      description: [t("special_member1.0"), t("special_member1.1"), t("special_member1.2")],
      gradient: "from-red-400 to-red-600",
      icon: <FaStar className="text-4xl" color="white" />,
      onClick: () => setShowSpecialFormModal(true),
    },
    {
      type: t("franchise1.3"),
      description: [t("franchise1.0"), t("franchise1.1"), t("franchise1.2")],
      gradient: "from-green-400 to-green-600",
      icon: <FaBuilding className="text-4xl" color="white" />,
      onClick: () => setShowFranchiseFormModal(true),
    },
  ]

  const Modal = ({ isOpen, onClose, children }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.2, type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl relative max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
              >
                ✕
              </motion.button>
              <div className="p-8">{children}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16 text-green-600"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl font-bold   mb-6"
          >
            {t("join_community")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed"
          >
            {t("community_message")}
          </motion.p>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: "16rem" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 border border-t-8 border-red-500 w-64 mx-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.1,
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform overflow-hidden"
              onClick={card.onClick}
            >
              <motion.div
                className={`bg-gradient-to-r ${card.gradient} h-32 flex items-center justify-center relative overflow-hidden`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl mb-2"
                >
                  {card.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                />
              </motion.div>
              <div className="p-6">
                <motion.h3
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors"
                >
                  {card.type}
                </motion.h3>
                <ul className="text-gray-600 leading-relaxed text-sm space-y-2 mb-4">
                  {card.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start"
                    >
                      <span className="text-green-500 mr-2 mt-1 text-xs">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 flex items-center text-green-600 font-medium text-sm group-hover:text-green-700"
                >
                  {t("learn")}
                  <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="ml-2">
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-20"
        >
          <ContactUs />
        </motion.div>
      </div>

      {/* Member Notification Modal */}
      <Modal isOpen={showMemberModal} onClose={() => setShowMemberModal(false)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", damping: 15 }}
            className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span className="text-2xl">
              <UsersIcon color="white" />
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            {t("welcome_future_member")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-gray-700 leading-relaxed"
          >
            {t("thank_you_message")}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMemberModal(false)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-200 font-medium"
          >
            Got it!
          </motion.button>
        </motion.div>
      </Modal>

      {/* Special Member Form Modal */}
      <Modal isOpen={showSpecialFormModal} onClose={() => setShowSpecialFormModal(false)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", damping: 15 }}
            className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span className="text-2xl">
              <FaStar color="white" />
            </span>
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900">{t("register_as_special_member")}</h2>
          <p className="text-gray-600 mt-2">{t("join_global_community")}</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onSubmit={(e) => handleSubmit(e, specialFormData, setSpecialFormData)}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("full_name")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="name"
              id="name"
              value={specialFormData.name}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("email")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="email"
              id="email"
              value={specialFormData.email}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("phone")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="tel"
              name="phone"
              id="phone"
              value={specialFormData.phone}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("gender")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="gender"
              id="gender"
              value={specialFormData.gender}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("nationality")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="nationality"
              id="nationality"
              value={specialFormData.nationality}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <label htmlFor="Countryresidence" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("Countryresidence")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="Countryresidence"
              id="Countryresidence"
              value={specialFormData.Countryresidence}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <label htmlFor="addressresidence" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("addressresidence")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="addressresidence"
              id="addressresidence"
              value={specialFormData.addressresidence}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <label htmlFor="moneyamount" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("moneyamount")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="moneyamount"
              id="moneyamount"
              value={specialFormData.moneyamount}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value="op-1"> 50 {t("birr")}</option>
              <option value="op-2">100 {t("birr")}</option>
              <option value="op-3">500 {t("birr")}</option>
              <option value="op-4">1000 {t("birr")}</option>
              <option value="op-1">5,000 {t("birr")}</option>
              <option value="op-2">10,000 {t("birr")}</option>
              <option value="op-3">30,000 {t("birr")}</option>
              <option value="op-4">50,000 {t("birr")}</option>
            </motion.select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            <label htmlFor="moneyamountschedule" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("moneyamountschedule")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="moneyamountschedule"
              id="moneyamountschedule"
              value={specialFormData.moneyamountschedule}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("donation_frequency.0")}>{t("donation_frequency.0")}</option>
              <option value={t("donation_frequency.1")}>{t("donation_frequency.1")}</option>
              <option value={t("donation_frequency.2")}>{t("donation_frequency.2")}</option>
              <option value={t("donation_frequency.3")}>{t("donation_frequency.3")}</option>
              <option value={t("donation_frequency.4")}>{t("donation_frequency.4")}</option>
              <option value={t("donation_frequency.5")}>{t("donation_frequency.5")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <label htmlFor="donation_duration" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("donation_duration.0")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="donation_duration"
              id="donation_duration"
              value={specialFormData.donation_duration}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("donation_duration.1")}>{t("donation_duration.1")}</option>
              <option value={t("donation_duration.2")}>{t("donation_duration.2")}</option>
              <option value={t("donation_duration.3")}>{t("donation_duration.3")}</option>
              <option value={t("donation_duration.4")}>{t("donation_duration.4")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            <label htmlFor="start_donation" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("start_donation")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="date"
              name="start_donation"
              id="start_donation"
              value={specialFormData.start_donation}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          >
            <label htmlFor="donation_option" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("donation_option.0")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="donation_option"
              id="donation_option"
              value={specialFormData.donation_option}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("donation_option.1")}>{t("donation_option.1")}</option>
              <option value={t("donation_option.2")}>{t("donation_option.2")}</option>
              <option value={t("donation_option.3")}>{t("donation_option.3")}</option>
              <option value={t("donation_option.4")}>{t("donation_option.4")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            <label htmlFor="reminder_preference" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("reminder_preference.0")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="reminder_preference"
              id="reminder_preference"
              value={specialFormData.reminder_preference}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("reminder_preference.1")}>{t("reminder_preference.1")}</option>
              <option value={t("reminder_preference.2")}>{t("reminder_preference.2")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            <label htmlFor="reminder_method" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("reminder_method.0")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="reminder_method"
              id="reminder_method"
              value={specialFormData.reminder_method}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("reminder_method.1")}>{t("reminder_method.1")}</option>
              <option value={t("reminder_method.2")}>{t("reminder_method.2")}</option>
              <option value={t("reminder_method.3")}>{t("reminder_method.3")}</option>
              <option value={t("reminder_method.4")}>{t("reminder_method.4")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.7 }}
          >
            <label htmlFor="reminder_method" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("late_notification")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="late_notification"
              id="late_notification"
              value={specialFormData.late_notification}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("reminder_method.1")}>{t("reminder_method.1")}</option>
              <option value={t("reminder_method.2")}>{t("reminder_method.2")}</option>
              <option value={t("reminder_method.3")}>{t("reminder_method.3")}</option>
              <option value={t("reminder_method.4")}>{t("reminder_method.4")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          >
            <label htmlFor="missed_deadline_notification" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("missed_deadline_notification.0")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="missed_deadline_notification"
              id="missed_deadline_notification"
              value={specialFormData.missed_deadline_notification}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
              <option value={t("missed_deadline_notification.1")}>{t("missed_deadline_notification.1")}</option>
              <option value={t("missed_deadline_notification.2")}>{t("missed_deadline_notification.2")}</option>
              <option value={t("missed_deadline_notification.3")}>{t("missed_deadline_notification.3")}</option>
            </motion.select>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.9 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform"
          >
            {t("submit_register")}
          </motion.button>
        </motion.form>
      </Modal>

      {/* Franchise Form Modal */}
      <Modal isOpen={showFranchiseFormModal} onClose={() => setShowFranchiseFormModal(false)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", damping: 15 }}
            className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span className="text-2xl">
              <FaBuilding color="white" />
            </span>
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900">{t("register_as_franchise")}</h2>
          <p className="text-gray-600 mt-2">{t("represent_askal")}</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onSubmit={(e) => handleSubmit(e, franchiseFormData, setFranchiseFormData)}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("full_name")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="name"
              id="name"
              value={franchiseFormData.name}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("age")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="number"
              name="age"
              id="age"
              value={franchiseFormData.age}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("phone_number")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={franchiseFormData.phoneNumber}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("addr")}
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="address"
              id="address"
              value={franchiseFormData.address}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("country")}
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="country"
              id="country"
              value={franchiseFormData.country}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <label htmlFor="academicLevel" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("academic_level")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="academicLevel"
              id="academicLevel"
              value={franchiseFormData.academicLevel}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            >
              <option value="">{t("select_option")}</option>
              <option value="high_school">{t("level_high_school")}</option>
              <option value="diploma">{t("level_diploma")}</option>
              <option value="bachelor">{t("level_bachelor")}</option>
              <option value="master">{t("level_master")}</option>
              <option value="phd">{t("level_phd")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <label htmlFor="maritalStatus" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("marital_status")}
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="maritalStatus"
              id="maritalStatus"
              value={franchiseFormData.maritalStatus}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            >
              <option value="">{t("select_option")}</option>
              <option value="single">{t("single")}</option>
              <option value="married">{t("married")}</option>
              <option value="divorced">{t("divorced")}</option>
              <option value="widowed">{t("widowed")}</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("join_reason")}
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="reason"
              id="reason"
              value={franchiseFormData.reason}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              rows={3}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform"
          >
            {t("submit_register")}
          </motion.button>
        </motion.form>
      </Modal>
    </motion.div>
  )
}

export default JoinUs
