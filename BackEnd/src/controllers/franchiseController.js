const db = require('../config/db');
const path = require('path');
const fs = require('fs');

// Create Franchise
const createFranchise = async (req, res) => {
    const { 
        fullName, 
        age, 
        phoneNumber, 
        address, 
        country, 
        academicLevel, 
        maritalStatus, 
        reasonToJoin 
    } = req.body;

    const photo = req.file;

    if (!fullName || !phoneNumber || !address) {
        return res.status(400).json({ message: 'Required fields: fullName, phoneNumber, address' });
    }

    try {
        let photoUrl = null;

        if (photo) {
            const uploadDir = path.join(__dirname, '../../uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const cleanName = photo.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
            const filename = `${Date.now()}-${cleanName}`;
            photoUrl = `/uploads/${filename}`;
            fs.writeFileSync(path.join(uploadDir, filename), photo.buffer);
        }

        const [result] = await db.query(
            `INSERT INTO franchises (
                fullName, age, phoneNumber, address, country, 
                academicLevel, maritalStatus, reasonToJoin, photoUrl
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                fullName,
                age || null,
                phoneNumber,
                address,
                country || null,
                academicLevel || null,
                maritalStatus || null,
                reasonToJoin || null,
                photoUrl
            ]
        );

        return res.status(201).json({
            message: 'Franchise registered successfully',
            id: result.insertId,
            franchise: {
                id: result.insertId,
                fullName,
                age,
                phoneNumber,
                address,
                country,
                academicLevel,
                maritalStatus,
                reasonToJoin,
                photoUrl
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
    const { 
        fullName, 
        age, 
        phoneNumber, 
        address, 
        country, 
        academicLevel, 
        maritalStatus, 
        reasonToJoin 
    } = req.body;

    try {
        // Get existing franchise
        const [existingRows] = await db.query('SELECT * FROM franchises WHERE id = ?', [id]);
        if (!existingRows.length) return res.status(404).json({ message: 'Not found' });
        
        const existing = existingRows[0];

        await db.query(
            `UPDATE franchises SET 
                fullName = ?, age = ?, phoneNumber = ?, address = ?, country = ?, 
                academicLevel = ?, maritalStatus = ?, reasonToJoin = ?
            WHERE id = ?`,
            [
                fullName || existing.fullName,
                age || existing.age,
                phoneNumber || existing.phoneNumber,
                address || existing.address,
                country || existing.country,
                academicLevel || existing.academicLevel,
                maritalStatus || existing.maritalStatus,
                reasonToJoin || existing.reasonToJoin,
                id
            ]
        );

        return res.status(200).json({ 
            message: 'Updated successfully',
            franchise: {
                id: parseInt(id),
                fullName: fullName || existing.fullName,
                age: age || existing.age,
                phoneNumber: phoneNumber || existing.phoneNumber,
                address: address || existing.address,
                country: country || existing.country,
                academicLevel: academicLevel || existing.academicLevel,
                maritalStatus: maritalStatus || existing.maritalStatus,
                reasonToJoin: reasonToJoin || existing.reasonToJoin
            }
        });
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
        return res.status(200).json({ message: 'Deleted successfully' });
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