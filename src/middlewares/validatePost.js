const postService = require('../service/post.service');
const userService = require('../service/user.service');

const validatePropertyRequired = (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        next();
};
 
const validatePropertyPutRequired = async (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};

const validateUserAuthorized = async (req, res, next) => {
    const { id } = req.user;

    const { dataValues: { userId } } = await postService.getById(req.params.id);
    const { dataValues } = await userService.getById(id);

    if (dataValues.id !== userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    next();
};

module.exports = {
    validatePropertyRequired,
    validatePropertyPutRequired,
    validateUserAuthorized,
};