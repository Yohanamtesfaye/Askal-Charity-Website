const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const adminController = require('../controllers/adminController');
const adminAuthController = require('../controllers/adminAuthController');
const { register, getVolunteers,deleteVolunteer,getVolunteerById, getDeletedVolunteers, restoreVolunteer, hardDeleteVolunteer } = require('../controllers/VolunteerregistrationController');
const { updatePaymentStatus } = require('../controllers/PaymentController');
const specialMemberController = require('../controllers/specialMemberController');
const franchiseController = require('../controllers/franchiseController');
const contactController = require('../controllers/contactController');
const previousMembersController = require('../controllers/previousMembersController');
const experienceController = require('../controllers/experienceController');

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
// Volunteer recycle bin
router.get('/volunteers-deleted', getDeletedVolunteers);
router.post('/volunteers/:id/restore', restoreVolunteer);
router.delete('/volunteers/:id/hard', hardDeleteVolunteer);

// Special Members CRUD
router.post('/special-members', upload.single('photo'), specialMemberController.createSpecialMember);
router.get('/special-members', specialMemberController.getSpecialMembers);
router.get('/special-members/:id', specialMemberController.getSpecialMemberById);
router.put('/special-members/:id', upload.single('photo'), specialMemberController.updateSpecialMember);
router.delete('/special-members/:id', specialMemberController.deleteSpecialMember);
// Special Members recycle bin
router.get('/special-members-deleted', specialMemberController.getDeletedSpecialMembers);
router.post('/special-members/:id/restore', specialMemberController.restoreSpecialMember);
router.delete('/special-members/:id/hard', specialMemberController.hardDeleteSpecialMember);
// Special Members payments update
router.post('/special-members/update-payment', specialMemberController.updateSpecialMemberPayment);

// Franchises CRUD
router.post('/franchises', upload.single('photo'), franchiseController.createFranchise);
router.get('/franchises', franchiseController.getFranchises);
router.get('/franchises/:id', franchiseController.getFranchiseById);
router.put('/franchises/:id', upload.single('photo'), franchiseController.updateFranchise);
router.delete('/franchises/:id', franchiseController.deleteFranchise);
// Franchises recycle bin
router.get('/franchises-deleted', franchiseController.getDeletedFranchises);
router.post('/franchises/:id/restore', franchiseController.restoreFranchise);
router.delete('/franchises/:id/hard', franchiseController.hardDeleteFranchise);

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

router.get('/admin/memberships-deleted', adminController.getDeletedMemberships);
router.post('/admin/memberships/:id/restore', adminController.restoreMembership);
router.delete('/admin/memberships/:id/hard', adminController.hardDeleteMembership);

router.get('/previous-members', previousMembersController.listPreviousMembers);
router.get('/previous-members/:id', previousMembersController.getPreviousMemberById);
router.post('/previous-members/:id/restore', previousMembersController.restorePreviousMember);

// Experiences routes
router.get('/experiences/:entity/:id', experienceController.listExperiences);
router.post('/experiences/:entity/:id', experienceController.addExperience);



// Admin Auth Routes

router.post('/admin/signup', adminAuthController.signup);        
router.post('/admin/login', adminAuthController.login);
router.post('/admin/forgot-password', adminAuthController.forgotPassword);
router.post('/admin/logout', adminAuthController.logout);
router.get('/admin', adminAuthController.getAllAdmins); 
router.get('/admin/:id', adminAuthController.getAdminById); 
router.post('/update-payment', updatePaymentStatus);

module.exports = router;
