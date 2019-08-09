const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.post('/createpost', postController.createPost);

module.exports = router;