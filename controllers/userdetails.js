const UserDetails = require('../models/userdetails');

exports.update = (req, res, next) => {
    const username = req.body.username;
    const id = req.body._id;
    const sex = req.body.sex;
    const dob = req.body.dob;
    console.log(username, sex, dob);

    const userDetails = new UserDetails(username, id, sex, dob);
    userDetails.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ message: 'User details updated successfully' });
            /**
             * Todo -
             * ! Do I really need to send a message in json format
             */
        })
        .catch(err => {
            console.log(err);
            /**
             * Todo - 
             * ! Need to understand error handling better.
             */
        })
    // let createdUser;
    // bcrypt
    //     .hash(password, 12)
    //     .then(hashedPw => {
    //         const user = new User(email, hashedPw);
    //         return user.save();
    //     })
    //     .then(result => {
    //         createdUser = result.ops[0];
    //         const token = jwt.sign({
    //             email: createdUser.email,
    //             userId: createdUser._id.toString()
    //         }, 'ThereIsNoDeityButAllah', { expiresIn: '1h' });
    //         res.status(201).json({ token: token, userId: createdUser._id.toString() });
    //     })
    //     .catch(err => {
    //         if (!err.statuCode) {
    //             err.statuCode = 500
    //         }
    //         next(err);
    //     })
};