const { User } = require('../models');
const { passwordFactoring } = require('../utils/funcUtils');

const getByEmail = async (email) => {
    const user = await User.findAll();

    const [emailExist] = user.filter((element) => element.email === email);

    return emailExist;
};

const getAll = async () => {
    const users = await User.findAll();

    const factoring = passwordFactoring(users);

    return factoring;
};
 
const getById = async (id) => {
    const userId = await User.findByPk(id);

    delete userId.dataValues.password;

    return userId;
};

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
};

const deleteUser = async (id) => {
    await User.destroy({ where: { id } });
};

module.exports = {
    getByEmail,
    getAll,
    getById,
    createUser,
    deleteUser,
};