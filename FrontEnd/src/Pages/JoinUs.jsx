"use client"

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
    membershipType: "specialmember",
    name: "",
    email: "",
    phone: "",
    phoneNumber: "",
    age: "",
    gender: "",
    nationality: "",
    Countryresidence: "",
    addressresidence: "",
    address: "",
    moneyamount: "",
    moneyamountschedule: "",
    donation_duration: "",
    start_donation: "",
    donation_option: "",
    reminder_preference: "",
    reminder_method: "",
    late_notification: "",
    missed_deadline_notification: "",
    reason: "",
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

  const handleSubmit = async (formData, setFormData) => {
    try {
      let url = ""
      let payload = {}

      if (formData.membershipType === "specialmember") {
        url = "http://localhost:5000/api/special-members"
        payload = {
          name: formData.name,
          phoneNumber: formData.phone || formData.phoneNumber,
          age: formData.age,
          address: formData.addressresidence || formData.address,
          title: "Special Member",
          description: formData.reason,
        }
      } else if (formData.membershipType === "franchise") {
        url = "http://localhost:5000/api/franchises"
        payload = {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          description: formData.reason,
        }
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Registration successful!", data)
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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12 text-green-600"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl font-bold mb-4"
            >
              {t("join_community")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 max-w-2xl mx-auto text-balance leading-relaxed"
            >
              {t("community_message")}
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 h-1 bg-green-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform overflow-hidden"
                onClick={card.onClick}
              >
                <motion.div
                  className={`bg-gradient-to-r ${card.gradient} h-24 flex items-center justify-center relative overflow-hidden`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl mb-2"
                  >
                    {card.icon}
                  </motion.div>
                </motion.div>
                <div className="p-5">
                  <motion.h3
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors"
                  >
                    {card.type}
                  </motion.h3>
                  <ul className="text-gray-600 leading-relaxed text-sm space-y-1 mb-3">
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
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 flex items-center text-green-600 font-medium text-sm group-hover:text-green-700"
                  >
                    {t("learn")}
                    <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }} className="ml-2">
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
            className="mt-16"
          >
            <ContactUs />
          </motion.div>
        </div>
      </motion.div>

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
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(specialFormData, setSpecialFormData)
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-6"
          >
            <div key="name-field">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("full_name")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={specialFormData.name}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="email-field">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("email")}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={specialFormData.email}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="phone-field">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("phone")}
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={specialFormData.phone}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="gender-field">
              <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("gender")}
              </label>
              <input
                type="text"
                name="gender"
                id="gender"
                value={specialFormData.gender}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, gender: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="nationality-field">
              <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("nationality")}
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                value={specialFormData.nationality}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, nationality: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="countryresidence-field">
              <label htmlFor="Countryresidence" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("Countryresidence")}
              </label>
              <input
                type="text"
                name="Countryresidence"
                id="Countryresidence"
                value={specialFormData.Countryresidence}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, Countryresidence: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="addressresidence-field">
              <label htmlFor="addressresidence" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("addressresidence")}
              </label>
              <input
                type="text"
                name="addressresidence"
                id="addressresidence"
                value={specialFormData.addressresidence}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, addressresidence: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="moneyamount-field">
              <label htmlFor="moneyamount" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("moneyamount")}
              </label>
              <select
                name="moneyamount"
                id="moneyamount"
                value={specialFormData.moneyamount}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, moneyamount: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                <option value="op-1">50 {t("birr")}</option>
                <option value="op-2">100 {t("birr")}</option>
                <option value="op-3">500 {t("birr")}</option>
                <option value="op-4">1000 {t("birr")}</option>
                <option value="op-5">5,000 {t("birr")}</option>
                <option value="op-6">10,000 {t("birr")}</option>
                <option value="op-7">30,000 {t("birr")}</option>
                <option value="op-8">50,000 {t("birr")}</option>
              </select>
            </div>

            <div key="moneyamountschedule-field">
              <label htmlFor="moneyamountschedule" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("moneyamountschedule")}
              </label>
              <select
                name="moneyamountschedule"
                id="moneyamountschedule"
                value={specialFormData.moneyamountschedule}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, moneyamountschedule: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <option key={i} value={t(`donation_frequency.${i}`)}>
                    {t(`donation_frequency.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div key="donation_duration-field">
              <label htmlFor="donation_duration" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("donation_duration.0")}
              </label>
              <select
                name="donation_duration"
                id="donation_duration"
                value={specialFormData.donation_duration}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, donation_duration: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[1, 2, 3, 4].map((i) => (
                  <option key={i} value={t(`donation_duration.${i}`)}>
                    {t(`donation_duration.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div key="start_donation-field">
              <label htmlFor="start_donation" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("start_donation")}
              </label>
              <input
                type="date"
                name="start_donation"
                id="start_donation"
                value={specialFormData.start_donation}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, start_donation: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="donation_option-field">
              <label htmlFor="donation_option" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("donation_option.0")}
              </label>
              <select
                name="donation_option"
                id="donation_option"
                value={specialFormData.donation_option}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, donation_option: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[1, 2, 3, 4].map((i) => (
                  <option key={i} value={t(`donation_option.${i}`)}>
                    {t(`donation_option.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div key="reminder_preference-field">
              <label htmlFor="reminder_preference" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("reminder_preference.0")}
              </label>
              <select
                name="reminder_preference"
                id="reminder_preference"
                value={specialFormData.reminder_preference}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, reminder_preference: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[1, 2].map((i) => (
                  <option key={i} value={t(`reminder_preference.${i}`)}>
                    {t(`reminder_preference.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div key="reminder_method-field">
              <label htmlFor="reminder_method" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("reminder_method.0")}
              </label>
              <select
                name="reminder_method"
                id="reminder_method"
                value={specialFormData.reminder_method}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, reminder_method: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[1, 2, 3, 4].map((i) => (
                  <option key={i} value={t(`reminder_method.${i}`)}>
                    {t(`reminder_method.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div key="late_notification-field">
              <label htmlFor="late_notification" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("late_notification")}
              </label>
              <select
                name="late_notification"
                id="late_notification"
                value={specialFormData.late_notification}
                onChange={(e) => setSpecialFormData((prev) => ({ ...prev, late_notification: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[1, 2, 3, 4].map((i) => (
                  <option key={i} value={t(`reminder_method.${i}`)}>
                    {t(`reminder_method.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div key="missed_deadline_notification-field">
              <label htmlFor="missed_deadline_notification" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("missed_deadline_notification.0")}
              </label>
              <select
                name="missed_deadline_notification"
                id="missed_deadline_notification"
                value={specialFormData.missed_deadline_notification}
                onChange={(e) =>
                  setSpecialFormData((prev) => ({ ...prev, missed_deadline_notification: e.target.value }))
                }
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
                required
              >
                {[1, 2, 3].map((i) => (
                  <option key={i} value={t(`missed_deadline_notification.${i}`)}>
                    {t(`missed_deadline_notification.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.9 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform"
            >
              {t("submit_register")}
            </motion.button>
          </motion.div>
        </form>
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
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(franchiseFormData, setFranchiseFormData)
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-6"
          >
            <div key="name-field">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("full_name")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={franchiseFormData.name}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="age-field">
              <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("age")}
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={franchiseFormData.age}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, age: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="phoneNumber-field">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("phone_number")}
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={franchiseFormData.phoneNumber}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="address-field">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("addr")}
              </label>
              <textarea
                name="address"
                id="address"
                value={franchiseFormData.address}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, address: e.target.value }))}
                rows={2}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors resize-none"
                required
              />
            </div>

            <div key="country-field">
              <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("country")}
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={franchiseFormData.country}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, country: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div key="academicLevel-field">
              <label htmlFor="academicLevel" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("academic_level")}
              </label>
              <select
                name="academicLevel"
                id="academicLevel"
                value={franchiseFormData.academicLevel}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, academicLevel: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
                required
              >
                <option value="">{t("select_option")}</option>
                <option value="high_school">{t("level_high_school")}</option>
                <option value="diploma">{t("level_diploma")}</option>
                <option value="bachelor">{t("level_bachelor")}</option>
                <option value="master">{t("level_master")}</option>
                <option value="phd">{t("level_phd")}</option>
              </select>
            </div>

            <div key="maritalStatus-field">
              <label htmlFor="maritalStatus" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("marital_status")}
              </label>
              <select
                name="maritalStatus"
                id="maritalStatus"
                value={franchiseFormData.maritalStatus}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, maritalStatus: e.target.value }))}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
                required
              >
                <option value="">{t("select_option")}</option>
                <option value="single">{t("single")}</option>
                <option value="married">{t("married")}</option>
                <option value="divorced">{t("divorced")}</option>
                <option value="widowed">{t("widowed")}</option>
              </select>
            </div>

            <div key="reason-field">
              <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("join_reason")}
              </label>
              <textarea
                name="reason"
                id="reason"
                value={franchiseFormData.reason}
                onChange={(e) => setFranchiseFormData((prev) => ({ ...prev, reason: e.target.value }))}
                rows={2}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform"
            >
              {t("submit_register")}
            </motion.button>
          </motion.div>
        </form>
      </Modal>
    </>
  )
}

export default JoinUs
