const express = require('express');
const { validateUser, validateToken } = require('../middlewares');
const userController = require('../controller/user.controller');

const route = express.Router();

route.post('/',
    validateUser.validateName,
    validateUser.validateEmail,
    validateUser.validatePassword,
    userController.createUser);

route.get('/', validateToken, userController.getAll);

module.exports = route;