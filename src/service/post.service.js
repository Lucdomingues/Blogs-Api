const { BlogPost, Category, User } = require('../models');

const getAll = async (id) => {
    const posts = await BlogPost.findOne({
        where: { userId: id },
        include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }],
    });

    return [posts];
};

// const createPost = async (id, title, content, categoryIds) => {
//     const postCreateds = await BlogPost.create({});
//     return postCreateds;
// };

module.exports = {
    getAll,
    // createPost,
};