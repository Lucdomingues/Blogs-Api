const { jwtGenerator } = require('../auth/authFunc');
const userService = require('../service/user.service');
const { isBodyValid } = require('../utils/funcUtils');

const getAll = async (_req, res) => {
    try {
        const users = await userService.getAll();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const userId = await userService.getById(id);
        
        return res.status(200).json(userId);
    } catch (error) {
        return res.status(404).json({ message: 'User does not exist' });
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

const deleteUser = async (req, res) => {
    try {
        const { id } = req.user;

        await userService.deleteUser(id);

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: 'erro no server' });
    }
};

module.exports = {
    getAll,
    getById,
    createUser,
    deleteUser,
};