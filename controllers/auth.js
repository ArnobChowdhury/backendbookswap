const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signup = (req, res, next) => {
    console.log('reached');
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            const user = new User(email, hashedPw);
            console.log(user);
            return user.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({message: 'User created!', userId: result._id});
        })
        .catch(err => {
            if (!err.statuCode) {
                err.statuCode = 500
            }
            next(err);
        })
};