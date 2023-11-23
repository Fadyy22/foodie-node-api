const { validationResult } = require('express-validator');

const validtorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array(), message: 'Validation failed.' });
  }
  next();
};

module.exports = validtorMiddleware;
