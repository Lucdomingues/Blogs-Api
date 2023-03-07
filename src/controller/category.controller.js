const categoryService = require('../service/category.service');

const getAll = async (req, res) => {
    try {
        const categories = await categoryService.getAll();

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const categoryCreated = await categoryService.createCategory(name);

        return res.status(201).json(categoryCreated);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    getAll,
    createCategory,
};