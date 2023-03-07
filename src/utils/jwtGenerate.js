require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtGenerator = async (reqBody) => {
        const { email } = reqBody;

        const user = await userService.getByEmail(email);

        const jwtConfig = {
            expiresIn: '7d',
            algorithm: 'HS256',
        };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    
    return token;
};

module.exports = { jwtGenerator };