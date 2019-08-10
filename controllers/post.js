const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    const createdBy = req.body.createdBy;
    const bookName = req.body.bookName;
    const author = req.body.author || null;
    const area = req.body.area;
    const isTextBook = req.body.isTextBook;
    const courseCode = req.body.courseCode || null;
    const edition = req.body.edition || null;

    const post = new Post(createdBy, bookName, author, area, isTextBook, courseCode, edition);

    post.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ message: 'User created!' });
        })
        .catch(err => {
            if (!err.statuCode) {
                err.statuCode = 500
            }
            next(err);
        })
};

exports.getInitialPosts = (req, res, next) => {
    Post.getAllPosts()
        .then(allPosts => {
            console.log('From controller', allPosts);
            res.status(201).json({
                posts: allPosts
            });
        })
        .catch (err => {
            console.log(err);
            if (!err.statuCode) {
                err.statuCode = 500;
            }
            next(err);
        });
};