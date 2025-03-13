import React, { useEffect, useState } from 'react';
import axios from 'axios';
import children from "../assets/Images/children.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Register() {
    const { t } = useTranslation();
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
            .catch(err => console.log(err));
    }, []);

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
                setData([...data, res.data]); 
                alert("Thanks for Helping!"); 
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row mx-32 h-screen items-center justify-center bg-gray-100">
                {/* Left part */}
                <div className="bg-white p-8 rounded-lg shadow-lg mr-16 w-full md:w-1/2 max-w-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">{t('get_Satrtd')}</h2>
                    <p className="text-center text-gray-500 mb-6">
                       {t('enter_required')}
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700">{t('full_name')}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder={t('enter_name')}
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700">{t('email')}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder={t('enter_email')}
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700">{t('phone_number')}</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder={t('enter_number')}
                            />
                        </div>
                        

                        {/* Type Dropdown */}
                        <div className="mb-6">
                            <label className="block text-gray-700">{t('how_often')}</label>
                            <select
                                name="often"
                                value={formData.often}
                                onChange={handleChange}
                                className="w-full border border-green-500 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="daily">{t('daily')}</option>
                                <option value="monthly">{t('monthly')}</option>
                                <option value="yearly">{t('yearly')}</option>
                            </select>
                        </div>

                        {/* Submit Button */}

                        <Link to='/login'>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-900 transition duration-300"
                        >
                           {t('signup')}
                        </button>
                        </Link>
                    </form>
                </div>

                {/* Right part */}
                <div className="hidden md:block w-full md:w-1/2 mx-6 h-screen">
                    <img src={children} className="w-full h-full object-cover" alt="Children" />
                </div>
            </div>
        </div>
    );
}

export default Register;
