const { User } = require('../models');

const getByEmail = async (email) => {
    const user = await User.findAll();

    const [emailExist] = user.filter((element) => element.email === email);

    return emailExist;
};

const getAll = async () => {
    const users = await User.findAll();

    const passwordFactoring = users.map((elements) => {
        const user = elements;
        delete user.dataValues.password;
        return user;
    });

    return passwordFactoring;
 };

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
};

module.exports = {
    getByEmail,
    getAll,
    createUser,
};