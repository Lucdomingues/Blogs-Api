const isBodyValid = (displayName, email, password) => displayName && email && password;

const passwordFactoring = (arr) => arr.map((elements) => {
        const user = elements;
        delete user.dataValues.password;
        return user;
    });

module.exports = {
    isBodyValid,
    passwordFactoring,
};