const express = require('express');
const router = express.Router();
const { 
  getSubjectDetails, 
  rateSubject 
} = require('../controllers/subjectController');
const auth = require('../middlewares/auth');

// Public routes
router.get('/:id', getSubjectDetails);

// Protected routes (require auth)
router.post('/:id/rate', auth, rateSubject);

module.exports = router;