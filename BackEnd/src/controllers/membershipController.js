const db = require('../config/db');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const { insertPreviousMember } = require('./previousMembersController');

const register = async (req, res) => {
  const { name, gender, phoneNumber, age, address, membershipType, donationAmount } = req.body;
  const photo = req.file;

  // Validation
  if (!name || !gender || !phoneNumber || !age || !address || !membershipType) {
    return res.status(400).json({ message: 'All fields except photo and donation are required' });
  }

  try {
    let photoPath = null;
    let photoUrl = null;
    
    if (photo) {
      const uploadDir = path.join(__dirname, '../../uploads');
      
      // Create uploads directory if needed
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      // Generate clean filename
      const cleanName = photo.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
      const filename = `${Date.now()}-${cleanName}`;
      photoPath = path.join('uploads', filename);
      photoUrl = `/uploads/${filename}`;
      
      // Save file using promisified version
      await writeFile(
        path.join(uploadDir, filename), // Save directly to the root uploads folder
        photo.buffer
      );
    }

    const finalMembershipType = membershipType || 
      (donationAmount && donationAmount !== '0' ? `Premium (${donationAmount})` : 'Basic');

    // Set default reason for admin registrations
    const defaultReason = "Registered by Admin";

    const [result] = await db.query(
      `INSERT INTO memberships 
       (name, gender, phone_number, age, address, membership_type, photo_path, payments, reason) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        gender,
        phoneNumber,
        age,
        address,
        finalMembershipType,
        photoPath,
        JSON.stringify(Array(6).fill(false)),
        defaultReason  // Always using the default reason for admin registrations
      ]
    );

    res.status(201).json({ 
      message: 'Registration successful!',
      id: result.insertId,
      photo_url: photoUrl,
      member: {
        id: result.insertId,
        name,
        gender,
        phone_number: phoneNumber,
        age,
        address,
        membership_type: finalMembershipType,
        photo_path: photoUrl,
        payments: Array(6).fill(false),
        reason: defaultReason
      }
    });
    
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ 
      message: 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};
const deleteMembership = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get the member before deleting
    const [rows] = await db.query('SELECT * FROM memberships WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ message: 'Not found' });
    
    const member = rows[0];
    
    // Insert into previous_members
    await insertPreviousMember({
      removedFrom: 'members',
      originalId: member.id,
      name: member.name,
      phoneNumber: member.phone_number,
      address: member.address,
      email: null, // members don't have email in your schema
      extra: member
    });
    
    // Soft delete by setting status
    const [result] = await db.query('UPDATE memberships SET status = ?, deleted_at = NOW() WHERE id = ?', ['previous_member', id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Not found' });
    
    return res.status(200).json({ message: 'Moved to recycle bin' });
  } catch (err) {
    console.error('Delete Membership Error:', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { register, deleteMembership };