

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
        setFormData({
          name: "",
          age: "",
          phoneNumber: "",
          address: "",
          reason: "",
          membershipType: formData.membershipType,
        })
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
      type: "Volunteer",
      description: [
        "Choose to be seasonal or lifetime volunteer",
        "Seasonal: volunteer on specific tasks like teaching students during summer",
        "Help on different tasks seasonally as needed",
        "Fulltime volunteers are always available when needed",
      ],
      gradient: "from-green-400 to-green-600",
      icon: <FaHandshake className="text-4xl" color="white" />,
      onClick: () => (window.location.href = "./volunteer"),
    },
    {
      type: "Become a Member",
      description: [
        "Participate in every task when needed",
        "Be present in annual meetings",
        "Take on additional responsibilities as required",
      ],
      gradient: "from-yellow-400 to-yellow-500",
      icon: <UsersIcon className="text-4xl" color="white" />,
      onClick: () => setShowMemberModal(true),
    },
    {
      type: "Special Member",
      description: [
        "Perfect for those living outside Addis Ababa or Ethiopia",
        "Help Askal mainly through donations",
        "Stay connected with our mission from anywhere",
      ],
      gradient: "from-red-400 to-red-600",
      icon: <FaStar className="text-4xl" color="white" />,
      onClick: () => setShowSpecialFormModal(true),
    },
    {
      type: "Franchise",
      description: [
        "Represent Askal in your company or location",
        "Expand our reach and impact",
        "Build partnerships in your community",
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
            Join Our Amazing Community
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed">
            Choose your preferred way to work with us and become part of something bigger. Together, we can make a real
            difference in our community.
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
                  Learn More
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome, Future Member!</h3>
          <p className="text-gray-700 leading-relaxed">
            Thank you for deciding to be an Askal member. Please come to our office at
                      Saris, Addis Ababa, around total gas station "dawi" building 2nd floor, and bring a formal
            letter to be a member of Askal.
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
          <h2 className="text-2xl font-bold text-gray-900">Register as Special Member</h2>
          <p className="text-gray-600 mt-2">Join our global community of supporters</p>
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
            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("age")}
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={specialFormData.age}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
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
              value={specialFormData.phoneNumber}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors"
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
              value={specialFormData.address}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={2}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
              {t("join_reason")}
            </label>
            <textarea
              name="reason"
              id="reason"
              value={specialFormData.reason}
              onChange={(e) => handleChange(e, setSpecialFormData, specialFormData)}
              rows={3}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-0 transition-colors resize-none"
              required
            />
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
          <h2 className="text-2xl font-bold text-gray-900">Register as Franchise</h2>
          <p className="text-gray-600 mt-2">Represent Askal in your location</p>
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
