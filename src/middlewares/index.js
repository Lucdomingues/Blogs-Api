const validateUser = require('./validateUser');
const validateToken = require('./validateToken');
const validateCategory = require('./validateCategory');
const validatePost = require('./validatePost');

module.exports = {
    validateToken,
    validateUser,
    validateCategory,
    validatePost,
};