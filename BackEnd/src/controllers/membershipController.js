const db = require('../config/db');  // Ensure db.js exists and is correctly configured

const register = async (req, res) => {
  const { name, age, membershipType, phoneNumber, address, reason } = req.body;

  // Validate required fields
  if (!name || !age || !membershipType || !phoneNumber || !address || !reason) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO memberships (name, age, membership_type, phone_number, address, reason) VALUES (?, ?, ?, ?, ?, ?)',
      [name, age, membershipType, phoneNumber, address, reason]
    );
    res.status(201).json({ message: 'Registration successful!', id: result.insertId });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { register };
