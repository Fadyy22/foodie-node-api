const asyncHandler = require('express-async-handler');

const factory = require('./handlersFactory');
const User = require('../models/user');

exports.addIdToParams = asyncHandler(async (req, res, next) => {
  if (req.userId) {
    req.params.id = req.userId;
  }
  next();
});

exports.getUser = factory.getOne(User);
