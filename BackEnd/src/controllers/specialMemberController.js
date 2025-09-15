const db = require('../config/db');
const path = require('path');
const fs = require('fs');
const { insertPreviousMember } = require('./previousMembersController');


// Create Special Member
const createSpecialMember = async (req, res) => {
    const {
        fullName,
        email,
        phoneNumber,
        gender,
        nationality,
        countryOfResidence,
        residentialAddress,
        donationAmount,
        donationFrequency,
        donationDuration,
        donationStartDate,
        paymentMethod,
        remindDonationDate,
        reminderMethod,
        lateNotificationMethod,
        lateNotificationTiming
    } = req.body;

    const photo = req.file;

    if (!fullName || !phoneNumber) {
        return res.status(400).json({ message: 'Required fields: fullName, phoneNumber' });
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

        // Insert data directly into the appropriate columns
        const [result] = await db.query(
            `INSERT INTO special_members (
                name, email, phoneNumber, gender, nationality, Countryresidence, 
                addressresidence, moneyamount, moneyamountschedule, donation_duration, 
                start_donation, donation_option, reminder_preference, reminder_method, 
                late_notification, missed_deadline_notification
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                fullName,
                email,
                phoneNumber,
                gender,
                nationality,
                countryOfResidence,
                residentialAddress,
                donationAmount,
                donationFrequency,
                donationDuration,
                donationStartDate,
                paymentMethod,
                remindDonationDate,
                reminderMethod,
                lateNotificationMethod,
                lateNotificationTiming
            ]
        );

        return res.status(201).json({
            message: 'Special member registered successfully',
            id: result.insertId,
            member: {
                id: result.insertId,
                name: fullName,
                email: email,
                phoneNumber: phoneNumber,
                gender: gender,
                nationality: nationality,
                countryOfResidence: countryOfResidence,
                residentialAddress: residentialAddress,
                donationAmount: donationAmount,
                donationFrequency: donationFrequency,
                donationDuration: donationDuration,
                donationStartDate: donationStartDate,
                paymentMethod: paymentMethod,
                remindDonationDate: remindDonationDate,
                reminderMethod: reminderMethod,
                lateNotificationMethod: lateNotificationMethod,
                lateNotificationTiming: lateNotificationTiming
            }
        });
    } catch (err) {
        console.error('Create Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Get all Special Members (exclude soft-deleted)
const getSpecialMembers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM special_members WHERE COALESCE(status, "active") != "previous_member" ORDER BY id DESC');
        
        // Map the database columns to more readable field names
        const members = rows.map(row => ({
            id: row.id,
            fullName: row.name,
            email: row.email,
            phoneNumber: row.phoneNumber,
            gender: row.gender,
            nationality: row.nationality,
            countryOfResidence: row.Countryresidence,
            residentialAddress: row.addressresidence,
            donationAmount: row.moneyamount,
            donationFrequency: row.moneyamountschedule,
            donationDuration: row.donation_duration,
            donationStartDate: row.start_donation,
            paymentMethod: row.donation_option,
            remindDonationDate: row.reminder_preference,
            reminderMethod: row.reminder_method,
            lateNotificationMethod: row.late_notification,
            lateNotificationTiming: row.missed_deadline_notification,
            createdAt: row.created_at
        }));

        return res.status(200).json(members);
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
        
        const row = rows[0];
        const memberData = {
            id: row.id,
            fullName: row.name,
            email: row.email,
            phoneNumber: row.phoneNumber,
            gender: row.gender,
            nationality: row.nationality,
            countryOfResidence: row.Countryresidence,
            residentialAddress: row.addressresidence,
            donationAmount: row.moneyamount,
            donationFrequency: row.moneyamountschedule,
            donationDuration: row.donation_duration,
            donationStartDate: row.start_donation,
            paymentMethod: row.donation_option,
            remindDonationDate: row.reminder_preference,
            reminderMethod: row.reminder_method,
            lateNotificationMethod: row.late_notification,
            lateNotificationTiming: row.missed_deadline_notification,
            createdAt: row.created_at
        };

        return res.status(200).json(memberData);
    } catch (err) {
        console.error('Get Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Update Special Member
const updateSpecialMember = async (req, res) => {
    const { id } = req.params;
    const {
        fullName,
        email,
        phoneNumber,
        gender,
        nationality,
        countryOfResidence,
        residentialAddress,
        donationAmount,
        donationFrequency,
        donationDuration,
        donationStartDate,
        paymentMethod,
        remindDonationDate,
        reminderMethod,
        lateNotificationMethod,
        lateNotificationTiming
    } = req.body;

    try {
        // Get existing member
        const [existingRows] = await db.query('SELECT * FROM special_members WHERE id = ?', [id]);
        if (!existingRows.length) return res.status(404).json({ message: 'Not found' });
        
        const existing = existingRows[0];

        await db.query(
            `UPDATE special_members SET 
                name = ?, email = ?, phoneNumber = ?, gender = ?, nationality = ?, 
                Countryresidence = ?, addressresidence = ?, moneyamount = ?, 
                moneyamountschedule = ?, donation_duration = ?, start_donation = ?, 
                donation_option = ?, reminder_preference = ?, reminder_method = ?, 
                late_notification = ?, missed_deadline_notification = ?
            WHERE id = ?`,
            [
                fullName || existing.name,
                email || existing.email,
                phoneNumber || existing.phoneNumber,
                gender || existing.gender,
                nationality || existing.nationality,
                countryOfResidence || existing.Countryresidence,
                residentialAddress || existing.addressresidence,
                donationAmount || existing.moneyamount,
                donationFrequency || existing.moneyamountschedule,
                donationDuration || existing.donation_duration,
                donationStartDate || existing.start_donation,
                paymentMethod || existing.donation_option,
                remindDonationDate || existing.reminder_preference,
                reminderMethod || existing.reminder_method,
                lateNotificationMethod || existing.late_notification,
                lateNotificationTiming || existing.missed_deadline_notification,
                id
            ]
        );

        return res.status(200).json({ 
            message: 'Updated successfully',
            member: {
                id: parseInt(id),
                fullName: fullName || existing.name,
                email: email || existing.email,
                phoneNumber: phoneNumber || existing.phoneNumber,
                gender: gender || existing.gender,
                nationality: nationality || existing.nationality,
                countryOfResidence: countryOfResidence || existing.Countryresidence,
                residentialAddress: residentialAddress || existing.addressresidence,
                donationAmount: donationAmount || existing.moneyamount,
                donationFrequency: donationFrequency || existing.moneyamountschedule,
                donationDuration: donationDuration || existing.donation_duration,
                donationStartDate: donationStartDate || existing.start_donation,
                paymentMethod: paymentMethod || existing.donation_option,
                remindDonationDate: remindDonationDate || existing.reminder_preference,
                reminderMethod: reminderMethod || existing.reminder_method,
                lateNotificationMethod: lateNotificationMethod || existing.late_notification,
                lateNotificationTiming: lateNotificationTiming || existing.missed_deadline_notification
            }
        });
    } catch (err) {
        console.error('Update Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Soft Delete Special Member
const deleteSpecialMember = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Get the special member before deleting
        const [rows] = await db.query('SELECT * FROM special_members WHERE id = ?', [id]);
        if (!rows.length) return res.status(404).json({ message: 'Not found' });
        
        const specialMember = rows[0];
        
        // Insert into previous_members
        await insertPreviousMember({
            removedFrom: 'specialMembers',
            originalId: specialMember.id,
            name: specialMember.name,
            phoneNumber: specialMember.phoneNumber,
            address: specialMember.addressresidence,
            email: specialMember.email,
            extra: specialMember
        });
        
        const [result] = await db.query('UPDATE special_members SET status = ?, deleted_at = NOW() WHERE id = ?', ['previous_member', id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json({ message: 'Moved to recycle bin' });
    } catch (err) {
        console.error('Delete Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// List soft-deleted special members
const getDeletedSpecialMembers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM special_members WHERE status = "previous_member" ORDER BY id DESC');
        return res.status(200).json(rows);
    } catch (err) {
        console.error('Get Deleted Special Members Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Restore soft-deleted special member
const restoreSpecialMember = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('UPDATE special_members SET status = NULL, deleted_at = NULL WHERE id = ? AND status = "previous_member"', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Not found or not deleted' });
        return res.status(200).json({ message: 'Restored successfully' });
    } catch (err) {
        console.error('Restore Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Hard delete special member
const hardDeleteSpecialMember = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM special_members WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json({ message: 'Permanently deleted' });
    } catch (err) {
        console.error('Hard Delete Special Member Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createSpecialMember,
    getSpecialMembers,
    getSpecialMemberById,
    updateSpecialMember,
    deleteSpecialMember,
    getDeletedSpecialMembers,
    restoreSpecialMember,
    hardDeleteSpecialMember
};