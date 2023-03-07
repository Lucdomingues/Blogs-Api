const { User } = require('../models');

const getByEmail = async (email) => {
    const user = await User.findAll();

    const [emailExist] = user.filter((element) => element.email === email);

    return emailExist;
};

module.exports = {
    getByEmail,
};