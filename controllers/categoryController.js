const asyncHandler = require('express-async-handler');

const Category = require('../models/category');
const errorHelper = require('../utils/error');
const deleteImageHelper = require('../utils/deleteImage');

// @desc    Get list of all categories
// @route   GET /categories
// @access  Public
exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json({ categories: categories });
});

// @desc    Get specific category by id
// @route   GET /categories/:id
// @access  Public
exports.getCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const category = await Category.findById(id);
  if (!category) {
    res.status(404).json({ message: 'Category not found.' });
  }

  res.status(200).json({ category: category });
});

// @desc    Create category
// @route   POST /categories
// @access  Private
exports.createCategory = asyncHandler(async (req, res) => {
  if (!req.file) {
    errorHelper('No image provided.', 422);
  }

  const name = req.body.name;
  const description = req.body.description;
  const image = req.file.path.replace('\\', '/');

  const category = await Category.create({
    name: name,
    description: description,
    image: image
  });

  res.status(201).json({
    message: 'Category created!',
    category: category
  });
});

// @desc    Update category by id
// @route   PUT /categories/:id
// @access  Private
exports.updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  let image = req.body.image;

  if (req.file) {
    image = req.file.path.replace('\\', '/');
  }

  if (!image) {
    errorHelper('No image provided.', 422);
  }

  const category = await Category.findById(id);
  if (!category) {
    res.status(404).json({ message: 'Category not found.' });
  }

  if (category.image !== image) {
    deleteImageHelper(category.image);
  }

  category.name = name;
  category.description = description;
  category.image = image;

  await category.save();

  res.status(200).json({ message: 'Category updated.', category: category });
});
