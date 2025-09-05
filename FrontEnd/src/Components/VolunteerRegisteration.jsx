import React, { useState } from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';

function RegistrationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    educationLevel: '',
    address: '',
    photo: null,
    experience: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      photo: file
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = t('name_required');
    if (!formData.phoneNumber) tempErrors.phoneNumber = t('phone_number_required');
    if (!formData.age) tempErrors.age = t('age_required');
    if (!formData.educationLevel) tempErrors.educationLevel = t('education_level_required');
    if (!formData.address) tempErrors.address = t('address_required');
    // Comment out or remove photo validation if photo is optional
    // if (!formData.photo) tempErrors.photo = t('photo_required');
    if (formData.age && (formData.age < 16 || formData.age > 100)) {
      tempErrors.age = t('age_range_error');
    }
    return tempErrors;
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  const formErrors = validateForm();
  if (Object.keys(formErrors).length === 0) {
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phoneNumber', formData.phoneNumber);
      data.append('age', formData.age);
      data.append('educationLevel', formData.educationLevel);
      data.append('address', formData.address);
      data.append('experience', formData.experience);
      if (formData.photo) {
        data.append('photo', formData.photo);
      }

      // Log FormData contents for debugging
      for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await fetch('http://localhost:5000/api/volunteers/register', {
        method: 'POST',
        body: data,
      });

      console.log('Response:', response);
      const result = await response.json();
      if (response.ok) {
        console.log('Registration successful:', result);
        alert(t('registration_success'));
        setFormData({
          name: '',
          phoneNumber: '',
          age: '',
          educationLevel: '',
          address: '',
          photo: null,
          experience: ''
        });
      } else {
        console.error('Registration failed:', result);
        alert(result.message || t('registration_failed'));
      }
    } catch (err) {
      console.error('Registration failed:', err);
      alert(t('registration_error'));
    }
  } else {
    setErrors(formErrors);
  }
};

  return (
    <div className="page-container">
      <div className="split-container">
        <div className="logo-section">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/askallogo.jpg-8NVVSHkCbd3BOr75NCaRNlUNhXPWGw.jpeg" 
            alt="Logo" 
            className="logo"
          />
          <h1 className="welcome-text">{t('welcome_')}</h1>
        </div>
        
        <div className="form-section">
          <h2 className='pb-6 m-4 font-bold text-lg'>{t('registration_form')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t('full_name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('enter_name')}
                  className='p-2'
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>{t('phone_number')}</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder={t('enter_number')}
                  className='p-2'
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('age')}</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder={t('enter_age')}
                  min="16"
                  max="100"
                  className='p-2'
                />
                {errors.age && <span className="error">{errors.age}</span>}
              </div>

              <div className="form-group">
                <label>{t('education_level')}</label>
                <select
                  className='p-2'
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                >
                  <option value="">{t('select_level')}</option>
                  <option value="high-school">{t('high_school')}</option>
                  <option value="bachelors">{t('bachelors')}</option>
                  <option value="masters">{t('masters')}</option>
                  <option value="phd">{t('phd')}</option>
                  <option value="other">{t('other')}</option>
                </select>
                {errors.educationLevel && <span className="error">{errors.educationLevel}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>{t('addr')}</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t('enter_addr')}
                rows="2"
                className='px-2'
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label>{t('photo')}</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                accept="image/*"
                className='p-2'
              />
              {errors.photo && <span className="error">{errors.photo}</span>}
            </div>

            <div className="form-group">
              <label>{t('experiance')}</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder={t('enter_exp')}
                rows="2"
                className='p-2'
              />
            </div>

            <button className='p-2 bg-green-700 hover:bg-green-600 text-white' type="submit">
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;