const express = require('express');
const { validateUser, validateToken } = require('../middlewares');
const userController = require('../controller/user.controller');

const route = express.Router();

route.get('/', validateToken, userController.getAll);
route.get('/:id', validateToken, userController.getById);
route.post('/',
    validateUser.validateName,
    validateUser.validateEmail,
    validateUser.validatePassword,
    userController.createUser);
route.delete('/me',
    validateToken,
    userController.deleteUser);

module.exports = route;