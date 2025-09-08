const db = require('../config/db');
const path = require('path');
const fs = require('fs');

// Create Franchise
const createFranchise = async (req, res) => {
    const { name, phoneNumber, address, city, country, description } = req.body;
    const photo = req.file;

    if (!name || !phoneNumber || !address) {
        return res.status(400).json({ message: 'Required fields: name, phoneNumber, address' });
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
            'INSERT INTO franchises (name, phone_number, address, city, country, description, photo_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, phoneNumber, address, city || null, country || null, description || null, photoPath]
        );

        return res.status(201).json({
            message: 'Franchise created',
            id: result.insertId,
            franchise: {
                id: result.insertId,
                name,
                phone_number: phoneNumber,
                address,
                city,
                country,
                description: description || null,
                photo_path: photoUrl
            }
        });
    } catch (err) {
        console.error('Create Franchise Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// List Franchises
const getFranchises = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM franchises ORDER BY id DESC');
        return res.status(200).json(rows);
    } catch (err) {
        console.error('Get Franchises Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Get Franchise by ID
const getFranchiseById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM franchises WHERE id = ?', [id]);
        if (!rows.length) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json(rows[0]);
    } catch (err) {
        console.error('Get Franchise Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Update Franchise
const updateFranchise = async (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber, address, city, country, description } = req.body;
    const photo = req.file;

    try {
        const [existingRows] = await db.query('SELECT * FROM franchises WHERE id = ?', [id]);
        if (!existingRows.length) return res.status(404).json({ message: 'Not found' });
        const existing = existingRows[0];

        let photoPath = existing.photo_path;
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
            'UPDATE franchises SET name = ?, phone_number = ?, address = ?, city = ?, country = ?, description = ?, photo_path = ? WHERE id = ?',
            [
                name ?? existing.name,
                phoneNumber ?? existing.phone_number,
                address ?? existing.address,
                city ?? existing.city,
                country ?? existing.country,
                description ?? existing.description,
                photoPath,
                id
            ]
        );

        return res.status(200).json({ message: 'Updated', photo_url: photoUrl });
    } catch (err) {
        console.error('Update Franchise Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Delete Franchise
const deleteFranchise = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM franchises WHERE id = ?', [id]);
        return res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        console.error('Delete Franchise Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createFranchise,
    getFranchises,
    getFranchiseById,
    updateFranchise,
    deleteFranchise
};


