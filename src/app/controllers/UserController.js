const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserController {
  //[GET] /login
  showLogin(req, res) {
    res.render('login', {
      layout: 'login-layout',
      title: 'Đăng nhập',
    });
  }

  //[GET] /register
  showRegister(req, res) {
    res.render('register', {
      layout: 'login-layout',
      title: 'Đăng ký',
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

  // [POST] /register
  async register(req, res) {
    const { username, password } = req.body;

    try {
      // Kiểm tra xem tên người dùng đã tồn tại trong cơ sở dữ liệu hay chưa
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        // Người dùng đã tồn tại
        console.log('Tên người dùng đã tồn tại:', username);
        return res.render('register', { layout: 'login-layout', title: 'Đăng ký', error: 'Tên người dùng đã tồn tại' });
      }

      // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
      const hashedPassword = await bcrypt.hash(password, 10);

      // Tạo người dùng mới và lưu vào cơ sở dữ liệu
      const newUser = new User({
        username,
        password: hashedPassword,
      });

      await newUser.save();

      // Đăng ký thành công, bạn có thể thực hiện hành động khác như đăng nhập ngay sau khi đăng ký
      res.redirect('/login'); // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
      res.status(500).send('Lỗi máy chủ');
    }
  }

  // [GET] /logout
  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Lỗi khi đăng xuất:', err);
      } else {
        res.redirect('/login'); // Chuyển hướng người dùng đến trang đăng nhập sau khi đăng xuất
      }
    });
  }
}

module.exports = new UserController;
