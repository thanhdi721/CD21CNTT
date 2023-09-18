const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

// Route for logging out (GET and POST)
router.post('/logout', userController.logout);
router.get('/', userController.logout);

module.exports = router;
