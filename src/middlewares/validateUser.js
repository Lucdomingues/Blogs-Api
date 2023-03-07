const userService = require('../service/user.service');

const validateName = (req, res, next) => {
    const { displayName } = req.body;

    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }

    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;

    const regex = /\S+@\S+\.\S+/;
    const validation = regex.test(email);

    if (!validation) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }

    const emailExist = await userService.getByEmail(email);

    if (emailExist) {
        return res.status(409).json({
            message: 'User already registered',
        });
    }

    next();
};

const validatePassword = async (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }

    next();
};

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
};