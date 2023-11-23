const { validationResult } = require('express-validator');

const errorHelper = require('../utils/error');

const validtorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorHelper('Validation failed.', 422, errors.array());
  }
  next();
};

module.exports = validtorMiddleware;
