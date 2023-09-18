const newsRouter = require('./news');
const logoutRouter = require('./logout');
const loginRouter = require('./login');
const registerRouter = require('./register');
const meRouter = require('./me');
const coursRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/', logoutRouter);
    app.use('/news', newsRouter);
    app.use('/register', registerRouter);
    app.use('/login', loginRouter);
    app.use('/logout', logoutRouter);
    app.use('/', registerRouter);
    app.use('/courses',coursRouter);
    app.use('/me',meRouter);
    app.use('/home', siteRouter);
    app.use('/', loginRouter);

}

module.exports = route;