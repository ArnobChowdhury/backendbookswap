const express = require('express');
const userDetailsController = require('../controllers/userdetails');

const router = express.Router();

router.put('/update', userDetailsController.update);

module.exports = router;