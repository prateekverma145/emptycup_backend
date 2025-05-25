const express = require('express');
const router = express.Router();
const { getAllDesigners } = require('../controllers/designerController');

router.get('/designers', getAllDesigners);

module.exports = router; 