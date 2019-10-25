const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');


const mongoConnect = require('./util/database').mongoConnect;

const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');
const authRoutes = require('./routes/userinfo');
const postRoutes = require('./routes/post');

const app = express();

// app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);
app.use('/userinfo', userInfoRoutes);
app.use('/post', postRoutes);

mongoConnect(() => {
    app.listen(8080);
})
