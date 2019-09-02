const getDb = require('../util/database').getDb;

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        const db = getDb();
        return db.collection('users')
            .insertOne(this)
    }
}

module.exports = User;