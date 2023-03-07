const { Category } = require('../models');

const getAll = async () => {
    const categories = await Category.findAll();

    return categories;
};

const createCategory = async (name) => {
    const categoryCreated = await Category.create({ name });

    return categoryCreated;
};

module.exports = {
    getAll,
    createCategory,
};