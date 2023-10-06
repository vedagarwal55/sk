const express = require('express');
const { loginController, registerController, authController } = require('../controllers/userCrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router onject

const router = express.Router()
//router

//Loging || post
router.post('/login',loginController)

//register
router.post('/register',registerController)

//auth||post
router.post('/getUserData',authMiddleware, authController)

module.exports = router;
