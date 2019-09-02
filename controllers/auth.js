const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let createdUser;
    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            const user = new User(email, hashedPw);
            return user.save();
        })
        .then(result => {
            createdUser = result.ops[0];
            const token = jwt.sign({
                email: createdUser.email,
                userId: createdUser._id.toString()
            }, 'ThereIsNoDeityButAllah', { expiresIn: '1h' });
            res.status(201).json({ token: token, userId: createdUser._id.toString() });
        })
        .catch(err => {
            if (!err.statuCode) {
                err.statuCode = 500
            }
            next(err);
        })
};