const { check } = require('express-validator');

const validtorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getCollectionValidator = [
  check('id')
    .isMongoId()
    .withMessage('Invalid collection id format.'),
  validtorMiddleware
];

exports.deleteCollectionValidator = [
  check('id')
    .isMongoId()
    .withMessage('Invalid collection id format.'),
  validtorMiddleware
];
