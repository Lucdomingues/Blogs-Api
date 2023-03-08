const Sequelize = require('sequelize');
const { BlogPost, Category, User, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const getAll = async (id) => {
    const posts = await BlogPost.findOne({
        where: { userId: id },
        include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }],
    });

    return [posts];
};

const getById = async (id) => {
    const postId = await BlogPost.findOne({
        where: { id },
        include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return postId;
};

const createPost = async (id, title, content, categoryIds) => {
    const result = await sequelize.transaction(async (t) => {
        const posts = await BlogPost.create({ title, content, userId: id }, { transaction: t });
        
        const arrCategory = categoryIds.map(async (element) => {
            await PostCategory.create({
                categoryId: element, postId: posts.id,
            }, { transaction: t });
        });
        
        await Promise.all(arrCategory);

        return posts;
     });

    return result;
};

const updatePost = async (id, title, content) => {
         await BlogPost.update(
            { title, content },
            { where: { id } },
        );
    const postUpdated = await getById(id);

    return postUpdated;
};

module.exports = {
    getAll,
    getById,
    createPost,
    updatePost,
};