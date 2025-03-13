import React, { useState } from "react"
import { useTranslation } from 'react-i18next';

const JoinUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    membershipType: "",
    phoneNumber: "",
    address: "",
    reason: "",
  })

  const memberships = [
    {
      type: "Franchise",
      price: "$29/month",
      features: ["Access to basic facilities", "Standard support", "Monthly newsletter", "Community access"],
      color: "bg-green-500",
    },
    {
      type: "Special Member",
      price: "$49/month",
      features: ["All Basic features", "Priority support", "Exclusive events", "Personal trainer consultation"],
      color: "bg-yellow-500",
    },
    {
      type: "Volunteer",
      price: "$99/month",
      features: ["All Premium features", "24/7 VIP support", "Private sessions", "Custom nutrition plan"],
      color: "bg-red-500",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Use formData directly here
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Registration successful!', data);
      } else {
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Membership Types Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('member_option')}</h2>

            <div className="space-y-4">
              {memberships.map((membership, index) => (
                <div key={membership.type} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`${membership.color} h-2`} />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{membership.type}</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{membership.price}</p>
                    <ul className="mt-4 space-y-2">
                      {membership.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('member_register')}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('full_name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  {t('age')}
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
                {t('membership_type')}
                </label>
                <select
                  name="membershipType"
                  id="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                >
                  <option value=""> {t('select_membership')}</option>
                  <option value="franchise">{t('franchise')}</option>
                  <option value="specialmember">{t('special_member')}</option>
                  <option value="volunteer">{t('volunteer')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  {t('phone_number')}
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  {t('addr')}
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                  {t('join_reason')}
                </label>
                <textarea
                  name="reason"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {t('submit_register')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
