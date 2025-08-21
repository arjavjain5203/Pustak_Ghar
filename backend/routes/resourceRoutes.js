const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { 
  getResources,
  addResource,
  rateResource 
} = require('../controllers/resourceController');

router.get('/', getResources);
router.post('/', auth, addResource);
router.post('/:id/rate', auth, rateResource);

module.exports = router;