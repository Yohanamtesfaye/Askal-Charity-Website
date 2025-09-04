

import { useState } from "react"
import { useTranslation } from "react-i18next"
import ContactUs from "./ContactUs"
import { FaHandshake} from "react-icons/fa"
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
          Object.keys(formData).map((key) => [
            key,
            key === "membershipType" ? formData.membershipType : "",
          ])
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
      type:  t('volunteer1.4'),
      description: [
        t('volunteer1.0'), 
            t('volunteer1.1'), 
            t('volunteer1.2'), 
            t('volunteer1.3')  
      ] ,
      gradient: "from-green-400 to-green-600",
      icon: <FaHandshake className="text-4xl" color="white" />,
      onClick: () => (window.location.href = "./volunteer"),
    },
    {
      type: t('member_option1.3'),
      description: [
        t('member_option1.0'),
            t('member_option1.1'),
            t('member_option1.2')
      ],
      gradient: "from-yellow-400 to-yellow-500",
      icon: <UsersIcon className="text-4xl" color="white" />,
      onClick: () => setShowMemberModal(true),
    },
    {
      type:  t('special_member1.3'),
      description: [
        t('special_member1.0'),
            t('special_member1.1'),
            t('special_member1.2')
      ],
      gradient: "from-red-400 to-red-600",
      icon: <FaStar className="text-4xl" color="white" />,
      onClick: () => setShowSpecialFormModal(true),
    },
    {
      type: t('franchise1.3'),
      description: [
        t('franchise1.0'),
            t('franchise1.1'),
            t('franchise1.2')
      ],
      gradient: "from-green-400 to-green-600",
      icon: <FaBuilding className="text-4xl" color="white" />,
      onClick: () => setShowFranchiseFormModal(true),
    },
  ]

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl relative max-w-md w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
          >
            ✕
          </button>
          <div className="p-8">{children}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 text-green-600">
          <h1 className="text-5xl font-bold   mb-6">
            {t('join_community')} 
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed">
            {t('community_message')} 
          </p>
                  <hr className="mt-4 border border-t-8 border-red-500 w-64 mx-auto rounded-lg" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.type}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
              onClick={card.onClick}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-gradient-to-r ${card.gradient} h-32 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {card.type}
                </h3>
                <ul className="text-gray-600 leading-relaxed text-sm space-y-2 mb-4">
                  {card.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-green-600 font-medium text-sm group-hover:text-green-700">
                  {t('learn')}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <ContactUs />
        </div>
      </div>

      {/* Member Notification Modal */}
      <Modal isOpen={showMemberModal} onClose={() => setShowMemberModal(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl"><UsersIcon color="white" /></span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('welcome_future_member')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('thank_you_message')}
          </p>
          <button
            onClick={() => setShowMemberModal(false)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-200 font-medium"
          >
            Got it!
          </button>
        </div>
      </Modal>

      {/* Special Member Form Modal */}
      <Modal isOpen={showSpecialFormModal} onClose={() => setShowSpecialFormModal(false)}>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl"><FaStar color="white" /></span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{t('register_as_special_member')}</h2>
          <p className="text-gray-600 mt-2">{t('join_global_community')}</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e, specialFormData, setSpecialFormData)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("full_name")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={specialFormData.name}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("email")}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={specialFormData.email}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("phone")}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={specialFormData.phone}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("gender")}
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={specialFormData.gender}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("nationality")}
            </label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              value={specialFormData.nationality}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </div>
          <div>
            <label htmlFor="Countryresidence" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("Countryresidence")}
            </label>
            <input
              type="text"
              name="Countryresidence"
              id="Countryresidence"
              value={specialFormData.Countryresidence}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </div>

          <div>
  <label htmlFor="addressresidence" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("addressresidence")}
  </label>
  <input
    type="text"
    name="addressresidence"
    id="addressresidence"
    value={specialFormData.addressresidence}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    rows={2}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
    required
  />
</div>
           
           <div>
            <label htmlFor="moneyamount" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("moneyamount")}
            </label>
           <select
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
            </select>
          </div>
          <div>
            <label htmlFor="moneyamountschedule" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("moneyamountschedule")}
            </label>
           <select
              name="moneyamountschedule"
              id="moneyamountschedule"
              value={specialFormData.moneyamountschedule}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
              required
            >
                 <option value={t('donation_frequency.0')}>{t('donation_frequency.0')}</option>
    <option value={t('donation_frequency.1')}>{t('donation_frequency.1')}</option>
    <option value={t('donation_frequency.2')}>{t('donation_frequency.2')}</option>
    <option value={t('donation_frequency.3')}>{t('donation_frequency.3')}</option>
    <option value={t('donation_frequency.4')}>{t('donation_frequency.4')}</option>
    <option value={t('donation_frequency.5')}>{t('donation_frequency.5')}</option>
            </select>
          </div>
          
          <div>
  <label htmlFor="donation_duration" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("donation_duration.0")}
  </label>
  <select
    name="donation_duration"
    id="donation_duration"
    value={specialFormData.donation_duration}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  >
    <option value={t('donation_duration.1')}>{t('donation_duration.1')}</option>
    <option value={t('donation_duration.2')}>{t('donation_duration.2')}</option>
    <option value={t('donation_duration.3')}>{t('donation_duration.3')}</option>
    <option value={t('donation_duration.4')}>{t('donation_duration.4')}</option>
  </select>
</div>

<div>
  <label htmlFor="start_donation" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("start_donation")}
  </label>
  <input
    type="date"
    name="start_donation"
    id="start_donation"
    value={specialFormData.start_donation}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  />
</div>

<div>
  <label htmlFor="donation_option" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("donation_option.0")}
  </label>
  <select
    name="donation_option"
    id="donation_option"
    value={specialFormData.donation_option}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  >
    <option value={t('donation_option.1')}>{t('donation_option.1')}</option>
    <option value={t('donation_option.2')}>{t('donation_option.2')}</option>
    <option value={t('donation_option.3')}>{t('donation_option.3')}</option>
    <option value={t('donation_option.4')}>{t('donation_option.4')}</option>
  </select>
</div>

<div>
  <label htmlFor="reminder_preference" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("reminder_preference.0")}
  </label>
  <select
    name="reminder_preference"
    id="reminder_preference"
    value={specialFormData.reminder_preference}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  >
    <option value={t('reminder_preference.1')}>{t('reminder_preference.1')}</option>
    <option value={t('reminder_preference.2')}>{t('reminder_preference.2')}</option>

  </select>
</div>

<div>
  <label htmlFor="reminder_method" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("reminder_method.0")}
  </label>
  <select
    name="reminder_method"
    id="reminder_method"
    value={specialFormData.reminder_method}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  >
    <option value={t('reminder_method.1')}>{t('reminder_method.1')}</option>
    <option value={t('reminder_method.2')}>{t('reminder_method.2')}</option>
    <option value={t('reminder_method.3')}>{t('reminder_method.3')}</option>
    <option value={t('reminder_method.4')}>{t('reminder_method.4')}</option>
   
  </select>
</div>

<div>
  <label htmlFor="reminder_method" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("late_notification")}
  </label>
  <select
    name="late_notification"
    id="late_notification"
    value={specialFormData.late_notification}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  >
    <option value={t('reminder_method.1')}>{t('reminder_method.1')}</option>
    <option value={t('reminder_method.2')}>{t('reminder_method.2')}</option>
    <option value={t('reminder_method.3')}>{t('reminder_method.3')}</option>
    <option value={t('reminder_method.4')}>{t('reminder_method.4')}</option>
  </select>
</div>

<div>
  <label htmlFor="missed_deadline_notification" className="block text-sm font-semibold text-gray-700 mb-2">
    {t("missed_deadline_notification.0")}
  </label>
  <select
    name="missed_deadline_notification"
    id="missed_deadline_notification"
    value={specialFormData.missed_deadline_notification}
    onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
    required
  >
    <option value={t('missed_deadline_notification.1')}>{t('missed_deadline_notification.1')}</option>
    <option value={t('missed_deadline_notification.2')}>{t('missed_deadline_notification.2')}</option>
    <option value={t('missed_deadline_notification.3')}>{t('missed_deadline_notification.3')}</option>
  </select>
</div>


          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t("submit_register")}
          </button>
        </form>
      </Modal>

      {/* Franchise Form Modal */}
      <Modal isOpen={showFranchiseFormModal} onClose={() => setShowFranchiseFormModal(false)}>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl"><FaBuilding color="white" /></span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{t('register_as_franchise')}</h2>
          <p className="text-gray-600 mt-2">{t('represent_askal')}</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e, franchiseFormData, setFranchiseFormData)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("full_name")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={franchiseFormData.name}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("age")}
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={franchiseFormData.age}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("phone_number")}
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={franchiseFormData.phoneNumber}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("addr")}
            </label>
            <textarea
              name="address"
              id="address"
              value={franchiseFormData.address}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("country")}
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={franchiseFormData.country}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="academicLevel" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("academic_level")}
            </label>
            <select
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
            </select>
          </div>

          <div>
            <label htmlFor="maritalStatus" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("marital_status")}
            </label>
            <select
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
            </select>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("join_reason")}
            </label>
            <textarea
              name="reason"
              id="reason"
              value={franchiseFormData.reason}
              onChange={(e) => handleChange(e, setFranchiseFormData, franchiseFormData)}
              rows={3}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t("submit_register")}
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default JoinUs
