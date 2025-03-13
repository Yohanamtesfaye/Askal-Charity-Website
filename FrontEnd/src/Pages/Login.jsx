import React, { useEffect, useState } from 'react';
import axios from 'axios';
import welcome from "../assets/Images/welcome.png";
import { useTranslation } from 'react-i18next';

function Register() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
                
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row mx-32 h-screen items-center justify-center bg-gray-100">
                {/* Left part */}
                <div className="bg-white p-8 rounded-lg shadow-lg mr-16 w-full md:w-1/2 max-w-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">{t('welcome_askal')}</h2>
                    <p className="text-center text-gray-500 mb-6">
                        {t('register_message')}
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
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-900 transition duration-300"
                        >
                            {t('login')}
                        </button>
                    </form>
                </div>

                {/* Right part */}
                <div className="hidden md:block w-full md:w-1/2 mx-6 h-screen">
                    <img src={welcome} className="w-full h-full object-cover" alt="Children" />
                </div>
            </div>
        </div>
    );
}

export default Register;
