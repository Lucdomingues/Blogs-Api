const express = require('express');
const { validateToken, validatePost } = require('../middlewares');
const postController = require('../controller/post.controller');

const route = express.Router();

route.get('/', validateToken, postController.getAll);
route.post('/',
    validateToken,
    validatePost.validatePropertyRequired,
    postController.createPost);

module.exports = route;