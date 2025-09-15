const db = require('../config/db');

const { insertPreviousMember } = require('./previousMembersController');

const register = async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Request File:', req.file);
    const { name, phoneNumber, age, educationLevel, address, experience } = req.body;
    const photo = req.file;

    if (!name || !phoneNumber || !age || !educationLevel || !address) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        let photoPath = null;
        if (photo) {
            // Generate filename with timestamp
            const filename = `${Date.now()}-${photo.originalname}`;
            photoPath = `/uploads/${filename}`;
            
            // Save file to uploads directory
            const fs = require('fs');
            const path = require('path');
            const uploadDir = path.join(__dirname, '../../uploads');
            
            // Create uploads directory if it doesn't exist
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            
            fs.writeFileSync(path.join(uploadDir, filename), photo.buffer);
        }

        const [result] = await db.query(
            'INSERT INTO volunteers (name, phone_number, age, education_level, address, experience, photo) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, phoneNumber, age, educationLevel, address, experience, photoPath]
        );
        res.status(201).json({ message: 'Registration successful!', id: result.insertId });
    } catch (err) {
        console.error('Database Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
const getVolunteers = async (req, res) => {
    try {
        const [volunteers] = await db.query('SELECT * FROM volunteers WHERE COALESCE(status, "active") != "previous_volunteer"');
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
        // Get the volunteer before deleting
        const [rows] = await db.query('SELECT * FROM volunteers WHERE id = ?', [id]);
        if (!rows.length) return res.status(404).json({ message: 'Volunteer not found' });
        
        const volunteer = rows[0];
        
        // Insert into previous_members
        await insertPreviousMember({
            removedFrom: 'volunteers',
            originalId: volunteer.id,
            name: volunteer.name,
            phoneNumber: volunteer.phone_number,
            address: volunteer.address,
            email: null, // volunteers don't have email in your schema
            extra: volunteer
        });
        
        const [result] = await db.query('UPDATE volunteers SET status = ?, deleted_at = NOW() WHERE id = ?', ['previous_volunteer', id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }
        res.status(200).json({ message: 'Volunteer moved to recycle bin' });
    } catch (err) {
        console.error('Database Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
// List soft-deleted volunteers
const getDeletedVolunteers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM volunteers WHERE status = "previous_volunteer"');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Restore soft-deleted volunteer
const restoreVolunteer = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('UPDATE volunteers SET status = NULL, deleted_at = NULL WHERE id = ? AND status = "previous_volunteer"', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Volunteer not found or not deleted' });
    }
    res.status(200).json({ message: 'Volunteer restored' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Hard delete volunteer
const hardDeleteVolunteer = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM volunteers WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.status(200).json({ message: 'Volunteer permanently deleted' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
const getVolunteerById = async (req, res) => {
  const { id } = req.params;
  try {
    const [volunteers] = await db.query('SELECT * FROM volunteers WHERE id = ?', [id]);
    if (volunteers.length === 0) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.status(200).json(volunteers[0]);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { register, getVolunteers, deleteVolunteer, getVolunteerById, getDeletedVolunteers, restoreVolunteer, hardDeleteVolunteer };

