const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const Category = require('../models/category');
const errorHelper = require('../helpers/error');

exports.getCategory = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({ categories: categories });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorHelper('Validation failed.', 422, errors.array());
  }

  const name = req.body.name;
  const description = req.body.description;

  const category = new Category({
    name: name,
    description: description
  });

  await category.save();

  res.status(201).json({
    message: 'Category created!',
    category: category
  });
});
