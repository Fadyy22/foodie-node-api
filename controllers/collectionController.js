const asyncHandler = require('express-async-handler');

const errorHelper = require('../utils/error');
const User = require('../models/user');

exports.createCollection = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const user = await User.findById(req.userId);

  user.collections.push({ name });
  const newDoc = await user.save();
  res.status(201).json({ message: 'collection created!', user: newDoc });
});

exports.deleteCollection = asyncHandler(asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(req.userId);

  const collectionIndex = user.collections.findIndex(collection => { return collection._id.toString() === id });

  if (collectionIndex === -1) {
    errorHelper('collection not found.', 404);
  }

  user.collections.splice(collectionIndex, 1);

  const newDoc = await user.save();

  res.status(200).json({ message: 'collection deleted', user: newDoc });
}));
