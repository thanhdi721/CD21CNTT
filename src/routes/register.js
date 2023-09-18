
const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');


router.post('/register', userController.register);
router.get('/', userController.showRegister);


module.exports = router;