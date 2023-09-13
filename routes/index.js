
const coursRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/courses',coursRouter);
    app.use('/', siteRouter);

}

module.exports = route;