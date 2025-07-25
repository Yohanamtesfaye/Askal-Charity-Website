// src/controllers/membershipController.js
const db = require('../config/db');
const path = require('path');
const fs = require('fs');

const register = async (req, res) => {
  const { name, gender, phoneNumber, age, address, membershipType, donationAmount } = req.body;
  const photo = req.file;

  if (!name || !gender || !phoneNumber || !age || !address || !membershipType) {
    return res.status(400).json({ message: 'All fields except photo and donation are required' });
  }

  const finalMembershipType = membershipType || (donationAmount && donationAmount !== '0' ? `Premium (${donationAmount})` : 'Basic');
  const payments = JSON.stringify(Array(6).fill(false)); // Initialize 6 months

  try {
    let photoPath = null;
    if (photo) {
      const uploadDir = path.join(__dirname, '../uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
      photoPath = path.join('uploads', `${Date.now()}-${photo.originalname}`);
      fs.writeFileSync(path.join(__dirname, '../', photoPath), photo.buffer);
    }

    const [result] = await db.query(
      'INSERT INTO memberships (name, gender, phone_number, age, address, membership_type, photo_path, reason, payments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, gender, phoneNumber, age, address, finalMembershipType, photoPath, 'Registered via form', payments]
    );
    res.status(201).json({ message: 'Registration successful!', id: result.insertId });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { register };