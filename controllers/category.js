const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');

const Category = require('../models/category');
const errorHelper = require('../helpers/error');

exports.getCategories = asyncHandler(async (req, res, next) => {
  const category = req.query.name || "";
  const categories = await Category.find({ name: { $regex: category, $options: 'i' } });

  res.status(200).json({ categories: categories });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorHelper('Validation failed.', 422, errors.array());
  }

  if (!req.file) {
    errorHelper('No image provided.', 422);
  }
  const name = req.body.name;
  const description = req.body.description;
  const image = req.file.path.replace('\\', '/');

  const category = new Category({
    name: name,
    description: description,
    image: image
  });

  await category.save();

  res.status(201).json({
    message: 'Category created!',
    category: category
  });
});
