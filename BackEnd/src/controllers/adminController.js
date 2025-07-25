// src/controllers/adminController.js
const db = require('../config/db');

const getAllMemberships = async (req, res) => {
  try {
    const [memberships] = await db.query('SELECT * FROM memberships');
    res.status(200).json(memberships);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateMembership = async (req, res) => {
  const { id } = req.params;
  const { name, gender, phoneNumber, age, address, membershipType, payments } = req.body;

  if (!name || !gender || !phoneNumber || !age || !address || !membershipType) {
    return res.status(400).json({ message: 'All fields except payments are required' });
  }

  try {
    const [result] = await db.query(
      'UPDATE memberships SET name = ?, gender = ?, phone_number = ?, age = ?, address = ?, membership_type = ?, payments = ? WHERE id = ?',
      [name, gender, phoneNumber, age, address, membershipType, JSON.stringify(payments), id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership updated successfully' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteMembership = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM memberships WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership deleted successfully' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllMemberships, updateMembership, deleteMembership };