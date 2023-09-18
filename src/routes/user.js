const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// loginController.index
router.post('/login', userController.login);
router.get('/', userController.show);



module.exports = router;