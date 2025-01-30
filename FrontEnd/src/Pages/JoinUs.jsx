import React, { useState } from "react"

const JoinUs = () => {
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
      type: "Basic",
      price: "$29/month",
      features: ["Access to basic facilities", "Standard support", "Monthly newsletter", "Community access"],
      color: "bg-green-500",
    },
    {
      type: "Premium",
      price: "$49/month",
      features: ["All Basic features", "Priority support", "Exclusive events", "Personal trainer consultation"],
      color: "bg-yellow-500",
    },
    {
      type: "Elite",
      price: "$99/month",
      features: ["All Premium features", "24/7 VIP support", "Private sessions", "Custom nutrition plan"],
      color: "bg-red-500",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Membership Options</h2>

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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Membership Registration</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
                  Membership Type
                </label>
                <select
                  name="membershipType"
                  id="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                >
                  <option value="">Select a membership</option>
                  <option value="basic">Basic</option>
                  <option value="premium">Premium</option>
                  <option value="elite">Elite</option>
                </select>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                  Why do you want to join us?
                </label>
                <textarea
                  name="reason"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs

