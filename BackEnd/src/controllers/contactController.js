const db = require('../config/db');

const createContact = async (req, res) => {
    const { fullName, phoneNumber, email, message } = req.body;

    if (!fullName || !message) {
        return res.status(400).json({ message: 'Required fields: fullName and message' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)',
            [fullName, phoneNumber || null, email || null, message]
        );

        return res.status(201).json({
            message: 'Contact message sent successfully',
            id: result.insertId,
            contact: {
                id: result.insertId,
                fullName,
                phoneNumber,
                email,
                message
            }
        });
    } catch (err) {
        console.error('Create Contact Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const getContacts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
        const contacts = rows.map(row => ({
            id: row.id,
            fullName: row.name,
            phoneNumber: row.phone,
            email: row.email,
            message: row.message,
            status: row.status,
            created_at: row.created_at
        }));

        return res.status(200).json(contacts);
    } catch (err) {
        console.error('Get Contacts Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM contacts WHERE id = ?', [id]);
        if (!rows.length) return res.status(404).json({ message: 'Contact not found' });
        
        const row = rows[0];
        const contact = {
            id: row.id,
            fullName: row.name,
            phoneNumber: row.phone,
            email: row.email,
            message: row.message,
            status: row.status,
            created_at: row.created_at
        };

        return res.status(200).json(contact);
    } catch (err) {
        console.error('Get Contact Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const updateContactStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
        return res.status(400).json({ message: 'Status must be: new, read, or replied' });
    }

    try {
        const [result] = await db.query(
            'UPDATE contacts SET status = ? WHERE id = ?',
            [status, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        return res.status(200).json({ 
            message: 'Contact status updated successfully',
            status: status
        });
    } catch (err) {
        console.error('Update Contact Status Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM contacts WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        return res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        console.error('Delete Contact Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const getContactStats = async (req, res) => {
    try {
        const [stats] = await db.query(`
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new,
                SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END) as read,
                SUM(CASE WHEN status = 'replied' THEN 1 ELSE 0 END) as replied
            FROM contacts
        `);

        return res.status(200).json(stats[0]);
    } catch (err) {
        console.error('Get Contact Stats Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createContact,
    getContacts,
    getContactById,
    updateContactStatus,
    deleteContact,
    getContactStats
};