const express = require('express');
const { validateToken, validatePost } = require('../middlewares');
const postController = require('../controller/post.controller');

const route = express.Router();

route.get('/', validateToken, postController.getAll);
route.get('/:id', validateToken, postController.getById);
route.post('/',
    validateToken,
    validatePost.validatePropertyRequired,
    postController.createPost);
route.put('/:id',
    validateToken, validatePost.validatePropertyPutRequired, postController.updatePost);

module.exports = route;