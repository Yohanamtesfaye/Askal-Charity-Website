import React, { useState } from 'react';
import './styles.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    educationLevel: '',
    address: '',
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

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone number is required';
    if (!formData.age) tempErrors.age = 'Age is required';
    if (!formData.educationLevel) tempErrors.educationLevel = 'Education level is required';
    if (!formData.address) tempErrors.address = 'Address is required';
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log('Response:', response);
        const result = await response.json();
        console.log('Registration successful:', result);
        alert('Registration successful!');
      } catch (err) {
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again.');
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
          <h1 className="welcome-text">Welcome to Our Community!</h1>
        </div>
        
        <div className="form-section">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  min="16"
                  max="100"
                />
                {errors.age && <span className="error">{errors.age}</span>}
              </div>

              <div className="form-group">
                <label>Education Level:</label>
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                >
                  <option value="">Select level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Master's</option>
                  <option value="phd">Ph.D.</option>
                  <option value="other">Other</option>
                </select>
                {errors.educationLevel && <span className="error">{errors.educationLevel}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows="2"
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label>Previous Experience (Optional):</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Brief description of relevant experience..."
                rows="2"
              />
            </div>

            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;