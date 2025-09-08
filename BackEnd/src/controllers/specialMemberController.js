const db = require('../config/db');
const path = require('path');
const fs = require('fs');

// Create Special Member
const createSpecialMember = async (req, res) => {
    const { name, phoneNumber, age, address, title, description } = req.body;
    const photo = req.file;

    if (!name || !phoneNumber) {
        return res.status(400).json({ message: 'Required fields: name, phoneNumber' });
    }

    try {
        let photoPath = null;
        let photoUrl = null;

        if (photo) {
            const uploadDir = path.join(__dirname, '../../uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const cleanName = photo.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
            const filename = `${Date.now()}-${cleanName}`;
            photoPath = path.join('uploads', filename);
            photoUrl = `/uploads/${filename}`;
            fs.writeFileSync(path.join(uploadDir, filename), photo.buffer);
        }

        const [result] = await db.query(
            'INSERT INTO special_members (name, phone_number, age, address, title, description, photo_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, phoneNumber, age || null, address || null, title || 'Special Member', description || null, photoPath]
        );

        return res.status(201).json({
            message: 'Special member created',
            id: result.insertId,
            member: {
                id: result.insertId,
                name,
                phone_number: phoneNumber,
                age,
                address,
                title,
                description: description || null,
                photo_path: photoUrl
            }
        });
    } catch (err) {
        console.error('Create Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Get all Special Members
const getSpecialMembers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM special_members ORDER BY id DESC');
        return res.status(200).json(rows);
    } catch (err) {
        console.error('Get Special Members Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Get one Special Member
const getSpecialMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM special_members WHERE id = ?', [id]);
        if (!rows.length) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json(rows[0]);
    } catch (err) {
        console.error('Get Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Update Special Member
const updateSpecialMember = async (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber, age, address, title, description } = req.body;
    const photo = req.file;

    try {
        // Get existing row to manage photo replacement
        const [existingRows] = await db.query('SELECT * FROM special_members WHERE id = ?', [id]);
        if (!existingRows.length) return res.status(404).json({ message: 'Not found' });
        const existing = existingRows[0];

        let photoPath = existing.photo_path; // stored as 'uploads/...' in DB
        let photoUrl = existing.photo_path ? `/${existing.photo_path}`.replace(/\\/g, '/') : null;

        if (photo) {
            const uploadDir = path.join(__dirname, '../../uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const cleanName = photo.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
            const filename = `${Date.now()}-${cleanName}`;
            photoPath = path.join('uploads', filename);
            photoUrl = `/uploads/${filename}`;
            fs.writeFileSync(path.join(uploadDir, filename), photo.buffer);
        }

        await db.query(
            'UPDATE special_members SET name = ?, phone_number = ?, age = ?, address = ?, title = ?, description = ?, photo_path = ? WHERE id = ?',
            [
                name ?? existing.name,
                phoneNumber ?? existing.phone_number,
                age ?? existing.age,
                address ?? existing.address,
                title ?? existing.title,
                description ?? existing.description,
                photoPath,
                id
            ]
        );

        return res.status(200).json({ message: 'Updated', photo_url: photoUrl });
    } catch (err) {
        console.error('Update Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Delete Special Member
const deleteSpecialMember = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM special_members WHERE id = ?', [id]);
        return res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        console.error('Delete Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createSpecialMember,
    getSpecialMembers,
    getSpecialMemberById,
    updateSpecialMember,
    deleteSpecialMember
};


