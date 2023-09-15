const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { query } = require('express');

class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        let coursesQuery = Course.find({});

        if(req.query.hasOwnProperty('_sort')){
            coursesQuery = coursesQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        Promise.all([coursesQuery,Course.countDocumentsDeleted({})])
            .then(([courses,deletedCount]) =>
                 res.render('me/stored-courses',{
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            )
            .catch(next);
    }
    // [GET] /me/trashCourses/courses
    trashCourses(req,res,next){
        Course.findWithDeleted({deleted: true})
        .then(courses => res.render('me/trash-courses',{
            courses: mutipleMongooseToObject(courses)
        }))
        .catch(next);
    }
}
// Export Site
module.exports = new MeController();