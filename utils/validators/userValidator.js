const { check } = require('express-validator');

const validtorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getUserValidator = [
  check('id')
    .isMongoId()
    .withMessage('Invalid user id format.'),
  validtorMiddleware
]
