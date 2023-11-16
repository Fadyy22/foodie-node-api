const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const authController = require('../controllers/auth');
const User = require('../models/user');

router.post('/signup', [
  body('name').trim().not().isEmpty(),
  body('email').isEmail().withMessage('Invalid email.')
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: value });
      if (user) {
        return Promise.reject('email already exists.');
      }
    })
    .normalizeEmail(),
  body('password').trim().isLength({ min: 8 })
], authController.signup);

router.post('/login', authController.login);

module.exports = router;
