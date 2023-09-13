const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    //[GET] /home
    async index(req, res, next) {
    // Callback
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (error) {
        //     next(err);
        // }
    // Promises    
        Course.find({})
        .then(courses => {
            res.render('home',{
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
// Export Site
module.exports = new SiteController;