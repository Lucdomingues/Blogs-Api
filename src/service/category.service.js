const { Category } = require('../models');

const createCategory = async (name) => {
    const categoryCreated = await Category.create({ name });

    return categoryCreated;
};

module.exports = {
    createCategory,
};