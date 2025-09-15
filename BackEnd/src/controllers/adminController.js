// src/controllers/adminController.js
const db = require('../config/db');
const { insertPreviousMember } = require('./previousMembersController');

const getAllMemberships = async (req, res) => {
  try {
    const [memberships] = await db.query('SELECT * FROM memberships WHERE COALESCE(status, "active") != "previous_member"');
    res.status(200).json(memberships);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
const getMembershipById = async (req, res) => {
  const { id } = req.params;
  
  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid member ID' });
  }

  try {
    const [results] = await db.query(
      'SELECT *, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_date FROM memberships WHERE id = ?', 
      [id]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: 'Member not found' });
    }

    const member = results[0];
    
    // Parse payments if stored as JSON string
    if (member.payments && typeof member.payments === 'string') {
      member.payments = JSON.parse(member.payments);
    }

    res.status(200).json(member);
    
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ 
      message: 'Server Error',
      error: err.message 
    });
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
    // Get the membership before deleting
    const [rows] = await db.query('SELECT * FROM memberships WHERE id = ?', [id]);
    if (!rows.length) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    
    const membership = rows[0];
    
    // Insert into previous_members
    await insertPreviousMember({
      removedFrom: 'memberships',
      originalId: membership.id,
      name: membership.name,
      phoneNumber: membership.phone_number,
      address: membership.address,
      email: null, // memberships don't have email in your schema
      extra: membership
    });
    
    // Soft delete: mark as previous member and set deleted_at
    const [result] = await db.query(
      'UPDATE memberships SET status = ?, deleted_at = NOW() WHERE id = ?',
      ['previous_member', id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership moved to recycle bin' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// List soft-deleted memberships (recycle bin)
const getDeletedMemberships = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM memberships WHERE status = "previous_member"');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Restore a soft-deleted membership
const restoreMembership = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query(
      'UPDATE memberships SET status = NULL, deleted_at = NULL WHERE id = ? AND status = "previous_member"',
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Membership not found or not deleted' });
    }
    res.status(200).json({ message: 'Membership restored' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Hard delete permanently removes the record
const hardDeleteMembership = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM memberships WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership permanently deleted' });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllMemberships, updateMembership, deleteMembership, getDeletedMemberships, restoreMembership, hardDeleteMembership,  getMembershipById, 
 };