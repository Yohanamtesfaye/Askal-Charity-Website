const db = require('../config/db');

const listPreviousMembers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM previous_members ORDER BY deleted_at DESC, id DESC');
    return res.status(200).json(rows);
  } catch (err) {
    console.error('List Previous Members Error:', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const insertPreviousMember = async ({ removedFrom, originalId, name, phoneNumber, address, email, extra }) => {
  try {
    await db.query(
      `INSERT INTO previous_members
       (removed_from, original_id, name, phone_number, address, email, extra)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [removedFrom, originalId || null, name || null, phoneNumber || null, address || null, email || null, extra ? JSON.stringify(extra) : null]
    );
  } catch (err) {
    console.error('Insert Previous Member Error:', err);
  }
};

module.exports = { listPreviousMembers, insertPreviousMember };