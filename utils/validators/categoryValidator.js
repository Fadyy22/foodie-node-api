const { check } = require('express-validator');

const validtorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getCategoryValidator = [
  check('id').isMongoId().withMessage('Invalid category id format.'),
  validtorMiddleware
]

exports.createCategoryValidator = [
  check('name').trim().isAlpha().isLength({ min: 3 }).withMessage('Category name is too short.'),
  check('description').trim().isLength({ min: 5 }).withMessage('Category description is too short.'),
  validtorMiddleware
]
