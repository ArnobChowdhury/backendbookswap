const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class UserDetail {
    constructor(username, id, sex, dob) {
        this.username = username;
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.sex = sex;
        this.dob = dob;
    }

    save() {
        const db = getDb();
        return db.collection('userdetails')
            .updateOne({ _id: this._id }, { $set: this }, { upsert: true })
    }
}

module.exports = UserDetail;