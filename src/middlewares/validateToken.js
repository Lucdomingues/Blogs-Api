require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

        const decoded = jwt.verify(token, secret);

        const user = await userService.getById(decoded.data.userId);

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};
