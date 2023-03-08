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

const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const postId = await postService.getById(id);

        if (!postId) {
            return res.status(404).json({ message: 'Post does not exist' });
        }

        return res.status(200).json(postId);
    } catch (error) {
        return res.status(404).json({ message: 'Post does not exist' });
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
    getById,
    createPost,
};