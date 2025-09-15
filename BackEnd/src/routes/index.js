const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const adminController = require('../controllers/adminController');
const adminAuthController = require('../controllers/adminAuthController');
const { register, getVolunteers,deleteVolunteer,getVolunteerById } = require('../controllers/VolunteerregistrationController');
const { updatePaymentStatus } = require('../controllers/PaymentController');
const specialMemberController = require('../controllers/specialMemberController');
const franchiseController = require('../controllers/franchiseController');
const contactController = require('../controllers/contactController');

const multer = require('multer');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test route working!' });
});
router.post('/memberships/register', upload.single('photo'), membershipController.register);
router.post('/volunteers/register', upload.single('photo'), register);
router.get('/volunteers', getVolunteers);
router.get('/volunteers/:id', getVolunteerById);
router.delete('/volunteers/:id', deleteVolunteer);

// Special Members CRUD
router.post('/special-members', upload.single('photo'), specialMemberController.createSpecialMember);
router.get('/special-members', specialMemberController.getSpecialMembers);
router.get('/special-members/:id', specialMemberController.getSpecialMemberById);
router.put('/special-members/:id', upload.single('photo'), specialMemberController.updateSpecialMember);
router.delete('/special-members/:id', specialMemberController.deleteSpecialMember);

// Franchises CRUD
router.post('/franchises', upload.single('photo'), franchiseController.createFranchise);
router.get('/franchises', franchiseController.getFranchises);
router.get('/franchises/:id', franchiseController.getFranchiseById);
router.put('/franchises/:id', upload.single('photo'), franchiseController.updateFranchise);
router.delete('/franchises/:id', franchiseController.deleteFranchise);

// Contact routes
router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.get('/contacts/stats', contactController.getContactStats);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id/status', contactController.updateContactStatus);
router.delete('/contacts/:id', contactController.deleteContact);

router.get('/admin/memberships', adminController.getAllMemberships);
router.get('/admin/memberships/:id', adminController.getMembershipById); 
router.delete('/admin/memberships/:id', adminController.deleteMembership);


// Admin Auth Routes

router.post('/admin/signup', adminAuthController.signup);        // POST /api/admin/signup
router.post('/admin/login', adminAuthController.login);
router.post('/admin/forgot-password', adminAuthController.forgotPassword);
router.post('/admin/logout', adminAuthController.logout);
router.get('/admin', adminAuthController.getAllAdmins); // GET /api/admin
router.get('/admin/:id', adminAuthController.getAdminById); // GET /api
router.post('/update-payment', updatePaymentStatus);// POST /api/admin/payments/update

module.exports = router;
