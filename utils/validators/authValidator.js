const { check } = require('express-validator');

const validtorMiddleware = require('../../middlewares/validatorMiddleware');

exports.signupValidator = [
  check('name').trim().isLength({ min: 4 }).withMessage('name is too short.'),
  check('email').isEmail().withMessage('Invalid email.').normalizeEmail(),
  check('password').trim().isStrongPassword({ minSymbols: 0 }),
  validtorMiddleware
]
