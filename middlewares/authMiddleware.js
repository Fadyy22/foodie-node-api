const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const errorHelper = require('../utils/error');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  let decodedToken;

  if (!authHeader) {
    errorHelper('Not authenticated.', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    decodedToken = jwt.verify(token, 'ForkifyReactFlutterNodeJS');
  } catch (error) {
    errorHelper('Internal Server Error', 500, error);
  }

  if (!decodedToken) {
    errorHelper('Not authenticated.', 401);
  }

  req.userId = decodedToken.userId;
  next();
};
