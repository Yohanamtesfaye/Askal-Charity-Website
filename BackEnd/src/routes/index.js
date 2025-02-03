const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const membershipController = require('../controllers/membershipController');
// Registration route
router.post('/register', registrationController.register);
// Membership route
router.post('/membership', membershipController.register);


module.exports = router;