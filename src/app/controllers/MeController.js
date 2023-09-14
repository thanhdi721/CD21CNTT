const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses',{
            courses: mutipleMongooseToObject(courses)
        }))
        .catch(next);
    }
    // [GET] /me/trashCourses/courses
    trashCourses(req,res,next){
        Course.findWithDeleted({deleted:true})
        .then(courses => res.render('me/trash-courses',{
            courses: mutipleMongooseToObject(courses)
        }))
        .catch(next);
    }
}
// Export Site
module.exports = new MeController();