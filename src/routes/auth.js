const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

// registerController.index
router.post('/register', authController.register);
router.get('/', authController.show);



module.exports = router;