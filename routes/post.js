const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.post('/createpost', postController.createPost);

router.get('/posts', postController.getInitialPosts);

module.exports = router;