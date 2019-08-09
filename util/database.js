const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://arnob:XSJN3F3JrU7qswrP@cluster0-laxfs.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
        console.log('\x1b[35m%s\x1b[0m', 'Mongo Connected');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!'; 
};

exports.mongoConnect = mongoConnect ;
exports.getDb = getDb ;