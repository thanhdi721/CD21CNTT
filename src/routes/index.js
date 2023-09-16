const newsRouter = require('./news');
const userRouter = require('./user');
const authRouter = require('./auth');
const meRouter = require('./me');
const coursRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/login', userRouter);
    app.use('/register', authRouter);
    app.use('/courses',coursRouter);
    app.use('/me',meRouter);
    app.use('/', siteRouter);

}

module.exports = route;