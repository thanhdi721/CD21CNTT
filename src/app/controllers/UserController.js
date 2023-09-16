class UserController{
    //[GET] /index-login
    index(req, res){
        res.render('login',{
            layout: 'login-layout', 
            title: 'Đăng nhập',
        });
    }
    // [GET] /login
    login(req, res){
        res.send('LOGIN DETAIL!');
    }
} 
// Export login
module.exports = new UserController;