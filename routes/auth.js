const asyncHandler = require('express-async-handler');
const { body } = require('express-validator');
const express = require('express');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', [
  body('name').trim().not().isEmpty(),
  body('email').isEmail().withMessage('Invalid email.')
    .custom(asyncHandler(async value => {
      const user = await User.findOne({ email: value });
      if (user) {
        return Promise.reject('email already exists.');
      }
    }))
    .normalizeEmail(),
  body('password').trim().isStrongPassword({
    minSymbols: 0
  })
], authController.signup);

router.post('/login', authController.login);

module.exports = router;
