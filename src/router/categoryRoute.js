const express = require('express');
const { validateCategory, validateToken } = require('../middlewares');
const categoryController = require('../controller/category.controller');

const route = express.Router();

route.get('/', validateToken, categoryController.getAll);
route.post('/',
    validateToken,
    validateCategory.validateName,
    categoryController.createCategory);

module.exports = route;