const express = require('express');
const userInfoController = require('../controllers/userinfo');

const router = express.Router();

router.post('/update', userInfoController.update);

module.exports = router;