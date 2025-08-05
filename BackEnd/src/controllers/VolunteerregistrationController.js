const db = require('../config/db');


const register = async (req, res) => {
    console.log('Request Body:', req.body);
    const { name, phoneNumber, age, educationLevel, address, experience } = req.body;

    if (!name || !phoneNumber || !age || !educationLevel || !address) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO registrations (name, phone_number, age, education_level, address, experience) VALUES (?, ?, ?, ?, ?, ?)',
            [name, phoneNumber, age, educationLevel, address, experience]
        );
        res.status(201).json({ message: 'Registration successful!', id: result.insertId });
    } catch (err) {
        console.error('Database Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
const getVolunteers = async (req, res) => {
    try {
        const [volunteers] = await db.query('SELECT * FROM registrations');
        if (!volunteers.length) {
            return res.status(200).json([]); // Return empty array if no data
        }
        res.status(200).json(volunteers);
    } catch (err) {
        console.error('Database Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
const deleteVolunteer = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM registrations WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }
        res.status(200).json({ message: 'Volunteer deleted successfully' });
    } catch (err) {
        console.error('Database Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
const getVolunteerById = async (req, res) => {
  const { id } = req.params;
  try {
    const [volunteers] = await db.query('SELECT * FROM registrations WHERE id = ?', [id]);
    if (volunteers.length === 0) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.status(200).json(volunteers[0]);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { register, getVolunteers, deleteVolunteer, getVolunteerById };

