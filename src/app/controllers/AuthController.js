const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

class AuthController{
    //[GET] /index-register
    show(req, res){
        res.render('register',{
            layout: 'login-layout', 
            title: 'Đăng Ký',
        });
    }
    // [POST] /register
    register(req, res){
        res.send('REGISTER DETAIL!');
    }

} 
// Export register
module.exports = new AuthController;