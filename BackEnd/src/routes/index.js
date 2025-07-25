// src/routes/index.js
const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const adminController = require('../controllers/adminController');
const multer = require('multer');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test route working!' });
});
router.post('/memberships/register', upload.single('photo'), membershipController.register); // Handle photo upload
router.get('/admin/memberships', adminController.getAllMemberships);
router.put('/admin/memberships/:id', adminController.updateMembership);
router.delete('/admin/memberships/:id', adminController.deleteMembership);

module.exports = router;