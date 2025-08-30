"use client"

import { useState } from "react"
import { MdEmail } from "react-icons/md"
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
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
    <div className=" min-h-screen">
      <div className=" py-8 text-center text-green-600 ">
        <h1 className="text-xl lg:text-6xl font-bold mb-2 text-balance">Contact Us</h1>
        <p className="text-green-700 text-lg">We'd love to hear from you. Get in touch with our team!</p>
        <hr className="mt-4 border border-t-8 border-yellow-400 w-64 mx-auto rounded-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:flex lg:gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="lg:w-1/2  bg-green-600 p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-400 to-yellow-400 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-4xl font-bold mb-8 text-balance text-white">Get in Touch</h2>
              <p className="text mb-12 text-lg leading-relaxed">
                Ready to make a difference? Reach out to us and let's work together to create positive change in our
                community.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MdEmail className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Email us</p>
                    <p className="text-yellow-300 font-medium hover:text-yellow-200 transition-colors duration-300">
                      askalcharityassociation@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Address</p>
                    <p className="text-gray-300 leading-relaxed">
                      Saris, Addis Ababa, around total gas station "dawi" building 2nd floor, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Call us</p>
                    <p className="text-yellow-300 font-medium hover:text-yellow-200 transition-colors duration-300">
                      +251 90 240 4444
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-400 to-yellow-400 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">Office hours</p>
                    <p className="text-gray-300">Monday to Sunday, 9:00 A.M. to 7:00 P.M.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a message</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="fullName" className="block text-md font-semibold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-md font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder="Enter a valid phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-md font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder="Enter a valid email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-md font-semibold text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-2 px-8 rounded-xl font-bold text-md hover:from-green-600 hover:via-green-700 hover:to-green-800 transform hover:scale-105 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-green-200"
                >
                  {t('send_msg')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
