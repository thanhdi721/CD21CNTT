const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
const bcrypt = require('bcrypt');

class UserController {
  //[GET] /index-login
  show(req, res) {
    res.render('login', {
      layout: 'login-layout',
      title: 'Đăng nhập',
    });
  }

  // [POST] /login
  async login(req, res) {
    const { username, password } = req.body;
  
    try {
      // Tìm người dùng trong cơ sở dữ liệu bằng username
      const user = await User.findOne({ username });
  
      if (!user) {
        // Người dùng không tồn tại
        console.log('Người dùng không tồn tại:', username);
        return res.render('login', { layout: 'login-layout', title: 'Đăng nhập', error: 'Tên đăng nhập hoặc mật khẩu không chính xác' });
      }
  
      // So sánh mật khẩu được nhập với mật khẩu trong cơ sở dữ liệu
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        // Mật khẩu khớp, đăng nhập thành công
        console.log('Đăng nhập thành công cho người dùng:', username);
        // Lưu thông tin đăng nhập vào phiên hoặc tạo token JWT (tùy theo yêu cầu của bạn)
        // Redirect hoặc hiển thị trang dashboard hoặc trang chính
        res.redirect('/home'); // Thay '/dashboard' bằng đường dẫn bạn muốn đến sau khi đăng nhập thành công
      } else {
        // Mật khẩu không khớp
        console.log('Mật khẩu không khớp cho người dùng:', username);
        res.render('login', { layout: 'login-layout', title: 'Đăng nhập', error: 'Tên đăng nhập hoặc mật khẩu không chính xác' });
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi trong quá trình đăng nhập:', error);
      res.status(500).send('Lỗi máy chủ');
    }
  }
}

// Export login
module.exports = new UserController;
