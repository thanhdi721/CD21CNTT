class AuthController{
    //[GET] /index-register
    index(req, res){
        res.render('register',{
            layout: 'login-layout', 
            title: 'Đăng Ký',
        });
    }
    // [GET] /register
    register(req, res){
        res.send('REGISTER DETAIL!');
    }
} 
// Export register
module.exports = new AuthController;