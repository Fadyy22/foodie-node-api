const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const errorHelper = require('../helpers/error');
const User = require('../models/user');

exports.signup = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorHelper('Validation failed.', 422, errors.array());
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({
    email: email,
    password: hashedPassword,
    name: name
  });
  const result = await user.save();
  res.status(201).json({ message: 'User created!', userId: result._id });
});

exports.login = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) {
    errorHelper('Invalid email or password', 401);
  }

  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    errorHelper('Invalid email or password', 401);
  }

  const token = jwt.sign({
    email: email,
    userId: user._id.toString()
  }, 'ForkifyReactFlutterNodeJS', { expiresIn: '1h' });

  res.status(200).json({
    token: token,
    userId: user._id.toString()
  });
});
