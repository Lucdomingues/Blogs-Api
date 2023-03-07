require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

        jwt.verify(token, secret);

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};
