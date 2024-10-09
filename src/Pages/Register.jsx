import React, { useEffect, useState } from 'react'
import axios from 'axios';
import children from "../assets/Images/children.png"

function Register() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        often: 'daily'
    });

    // Fetch data from the server
    useEffect(() => {
        axios.get('http://localhost:3031/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3031/users', formData)
            .then((res) => {
                console.log("User added:", res.data);
                setData([...data, res.data]); // Update UI with new user
                alert("Thanks for Helping!"); // Display the alert message
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
                {/* Left part*/}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 max-w-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Get Started Now</h2>
                    <p className="text-center text-gray-500 mb-6">
                        Enter required information and become a family member of Askal
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Full name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Type Dropdown */}
                        <div className="mb-6">
                            <label className="block text-gray-700">How often will you make the specified donation?</label>
                            <select
                                name="often"
                                value={formData.often}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="daily">Daily</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-900 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                {/* Right part */}
                <div className="hidden md:block w-full md:w-1/2 mx-6 h-screen">
                    <img src={children} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Register;
