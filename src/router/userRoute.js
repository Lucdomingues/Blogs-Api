const express = require('express');
const { validateEmail, validateName, validatePassword } = require('../middlewares/validateUser');
const userController = require('../controller/user.controller');

const route = express.Router();

route.post('/', validateName, validateEmail, validatePassword, userController.createUser);

module.exports = route;