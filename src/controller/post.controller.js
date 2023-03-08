const postService = require('../service/post.service');

const getAll = async (req, res) => {
    try {
        const { id } = req.user;

        const posts = await postService.getAll(id);

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id } = req.user;

        const postCreated = await postService.createPost(id, title, content, categoryIds);

        return res.status(201).json(postCreated);
    } catch (error) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
};

module.exports = {
    getAll,
    createPost,
};