
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://askalcharityassociation.org/apis/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className=" min-h-screen">
      <div className=" py-8 text-center text-green-600 ">
        <h1 className="text-xl lg:text-6xl font-bold mb-2 text-balance">{t('contact_us1')} </h1>
        <p className="text-green-700 text-lg">{t('hear_from_you')} </p>
        <hr className="mt-4 border border-t-8 border-yellow-400 w-64 mx-auto rounded-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:flex lg:gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="lg:w-1/2  bg-green-600 p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-400 to-yellow-400 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-4xl font-bold mb-8 text-balance text-white">{t('get_in_touch')}</h2>
              <p className="text mb-12 text-lg leading-relaxed">
                {t('ready_to_make_difference')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MdEmail className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">{t('email_us')}</p>
                    <p className="text-yellow-300 font-medium text-xs lg:text-sm hover:text-yellow-200 transition-colors duration-300">
                      askalcharityassociation@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">{t('address1')}</p>
                    <p className="text-white leading-relaxed">
                      {t('address_detail')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2">{t('call_us')}</p>
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
                    <p className="text-xl font-bold mb-2">{t('office_hours')}</p>
                    <p className="text-white">{t('office_hours_detail')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('send_message')} </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('fill_out_form')} 
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="fullName" className="block text-md font-semibold text-gray-800 mb-2">
                   {t('full_name1')} 
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder= {t('full_name_ph')} 
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-md font-semibold text-gray-800 mb-2">
                   {t('phone')} 
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder= {t('phone_ph')} 
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-md font-semibold text-gray-800 mb-2">
                  {t('email1')} 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder={t('email_ph')}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-md font-semibold text-gray-800 mb-2">
                  {t('msg')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-xl bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder={t('msg_ph')} 
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
