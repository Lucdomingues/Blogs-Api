const express = require('express');
const { validateCategory, validateToken } = require('../middlewares');
const categoryController = require('../controller/category.controller');

const route = express.Router();

route.post('/',
    validateToken,
    validateCategory.validateName,
    categoryController.createCategory);

module.exports = route;