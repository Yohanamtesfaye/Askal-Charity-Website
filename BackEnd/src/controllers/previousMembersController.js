const db = require('../config/db');

// Normalize source keys to match DB enum
const normalizeSource = (removedFrom) => {
  if (!removedFrom) return null;
  const key = String(removedFrom).trim();
  if (key === 'memberships' || key === 'members') return 'members';
  if (key === 'special_members' || key === 'specialMembers') return 'specialMembers';
  if (key === 'franchises' || key === 'franchise') return 'franchise';
  if (key === 'volunteer' || key === 'volunteers') return 'volunteers';
  return key;
};

const listPreviousMembers = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT 
         id,
         original_id AS originalId,
         removed_from AS removedFrom,
         name,
         phone_number AS phoneNumber,
         address,
         email,
         DATE_FORMAT(deleted_at, '%Y-%m-%d %H:%i:%s') AS deletedAt
       FROM previous_members
       ORDER BY deleted_at DESC, id DESC`
    );
    return res.status(200).json(rows);
  } catch (err) {
    console.error('List Previous Members Error:', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const getPreviousMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM previous_members WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ message: 'Not found' });
    const row = rows[0];
    let extra = null;
    try { extra = row.extra ? JSON.parse(row.extra) : null; } catch (_) { extra = row.extra; }
    return res.status(200).json({
      id: row.id,
      originalId: row.original_id,
      removedFrom: row.removed_from,
      name: row.name,
      phoneNumber: row.phone_number,
      address: row.address,
      email: row.email,
      extra,
      deletedAt: row.deleted_at
    });
  } catch (err) {
    console.error('Get Previous Member Error:', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const insertPreviousMember = async ({ removedFrom, originalId, name, phoneNumber, address, email, extra }) => {
  try {
    const normalized = normalizeSource(removedFrom);
    await db.query(
      `INSERT INTO previous_members
       (removed_from, original_id, name, phone_number, address, email, extra, deleted_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
      [normalized, originalId || null, name || null, phoneNumber || null, address || null, email || null, extra ? JSON.stringify(extra) : null]
    );
  } catch (err) {
    console.error('Insert Previous Member Error:', err);
  }
};

const restorePreviousMember = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM previous_members WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ message: 'Not found' });
    const row = rows[0];
    const removedFrom = row.removed_from;
    const originalId = row.original_id;

    if (!originalId) return res.status(400).json({ message: 'Original ID missing; cannot restore' });

    let table;
    if (removedFrom === 'members') table = 'memberships';
    else if (removedFrom === 'specialMembers') table = 'special_members';
    else if (removedFrom === 'volunteers') table = 'volunteers';
    else if (removedFrom === 'franchise') table = 'franchises';
    else return res.status(400).json({ message: 'Unknown source type' });

    const [update] = await db.query(`UPDATE ${table} SET status = NULL, deleted_at = NULL WHERE id = ?`, [originalId]);
    if (update.affectedRows === 0) return res.status(404).json({ message: 'Original record not found' });

    // Optionally remove from archive
    await db.query('DELETE FROM previous_members WHERE id = ?', [id]);

    return res.status(200).json({ message: 'Restored successfully' });
  } catch (err) {
    console.error('Restore Previous Member Error:', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { listPreviousMembers, getPreviousMemberById, insertPreviousMember, restorePreviousMember };