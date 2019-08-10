const getDB = require('../util/database').getDb;

class Post {
    constructor(createdBy, bookName, author, area, isTextBook, courseCode, edition) {
        this.createdBy = createdBy;
        this.bookName = bookName;
        this.author = author;
        this.area = area;
        this.isTextBook = isTextBook;
        this.courseCode = courseCode;
        this.edition = edition;
        this.createdAt = new Date(); 
    }

    save() {
        const db = getDB();
        db.collection('post')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    static getAllPosts () {
        const db = getDB();
        return db
                .collection('post')
                .find({})
                .toArray()
                .then(posts => {
                    return posts;
                })
    }
};

module.exports = Post; 