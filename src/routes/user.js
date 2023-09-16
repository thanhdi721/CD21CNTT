const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// loginController.index
router.get('/login', userController.login);
router.get('/', userController.index);



module.exports = router;