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

module.exports = { register }; // CommonJS export
