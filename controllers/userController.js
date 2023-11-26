const factory = require('./handlersFactory');
const User = require('../models/user');

exports.getUser = factory.getOne(User);
