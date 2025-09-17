const db = require('../config/db');

const VALID_ENTITIES = new Set(['members', 'special_members', 'volunteers', 'franchises']);

const listExperiences = async (req, res) => {
    try {
        const { entity, id } = req.params;
        if (!VALID_ENTITIES.has(entity)) return res.status(400).json({ message: 'Invalid entity type' });
        const [rows] = await db.query(
            'SELECT id, content, DATE_FORMAT(created_at, "%Y-%m-%d %H:%i:%s") as createdAt FROM experiences WHERE entity_type = ? AND entity_id = ? ORDER BY created_at DESC',
            [entity, id]
        );
        return res.status(200).json(rows);
    } catch (err) {
        console.error('List Experiences Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const addExperience = async (req, res) => {
    try {
        const { entity, id } = req.params;
        const { content } = req.body;
        if (!VALID_ENTITIES.has(entity)) return res.status(400).json({ message: 'Invalid entity type' });
        if (!content || !content.trim()) return res.status(400).json({ message: 'content is required' });
        const [result] = await db.query(
            'INSERT INTO experiences (entity_type, entity_id, content) VALUES (?, ?, ?)',
            [entity, id, content.trim()]
        );
        return res.status(201).json({ id: result.insertId, content: content.trim() });
    } catch (err) {
        console.error('Add Experience Error:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { listExperiences, addExperience };


