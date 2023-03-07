const { Category } = require('../models');

const getAll = async () => {
    const categories = await Category.findAll();

    return categories;
};

const createCategory = async (name) => {
    const categoryCreateds = await Category.create({ name });

    return categoryCreateds;
};

module.exports = {
    getAll,
    createCategory,
};