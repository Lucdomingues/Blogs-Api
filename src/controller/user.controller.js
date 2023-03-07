const { jwtGenerator } = require('../auth/authFunc');
const userService = require('../service/user.service');

const isBodyValid = (displayName, email, password) => displayName && email && password;

const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        if (!isBodyValid(displayName, email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        await userService.createUser(displayName, email, password, image);

        const token = await jwtGenerator(req.body);

        return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    getAll,
    createUser,
};