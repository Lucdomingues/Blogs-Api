const categoryService = require('../service/category.service');

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
    createCategory,
};