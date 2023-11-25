const asyncHandler = require('express-async-handler');

const SubCategory = require('../models/subCategory');
const deleteImageHelper = require('../utils/deleteImage');
const uploadSingleImage = require('../middlewares/uploadImageMiddleware');
const errorHelper = require('../utils/error');


exports.uploadSubCategoryImage = uploadSingleImage('subcategories', 'image');

// @desc    Create subcategory
// @route   POST /subcategories
// @access  Private
exports.createSubCategory = asyncHandler(async (req, res) => {
  // if (!req.file) {
  //   errorHelper('No image provided.', 422);
  // }

  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  let image;
  if (req.file) {
    image = req.file.path.replace('uploads\\', '').replace('\\', '/');
  }

  const subcategory = await SubCategory.create({
    name: name,
    description: description,
    category: category,
    image: image
  });

  res.status(201).json({
    message: 'Subcategory created!',
    subcategory: subcategory
  });
});

// @desc    Get list of all subcategories
// @route   GET /subcategories
// @access  Public
exports.getSubCategories = asyncHandler(async (req, res) => {
  const filter = (req.params.categoryId) ? { category: req.params.categoryId } : {};
  const subCategories = await SubCategory.find(filter);


  res.status(200).json({ subcategories: subCategories });
});

// @desc    Get specific subcategory by id
// @route   GET /subcategories/:id
// @access  Public
exports.getSubCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const subCategory = await SubCategory.findById(id);
  if (!subCategory) {
    errorHelper('Subcategory not found.', 404);
  }

  res.status(200).json({ subcategory: subCategory });
});

// @desc    Update subcategory by id
// @route   PUT /subcategories/:id
// @access  Private
exports.updateSubCategory = asyncHandler(async (req, res) => {
  // add image upload logic
  const { id } = req.params;
  const { name, description, category } = req.body;

  const subCategory = await SubCategory.findOneAndUpdate(
    { _id: id },
    { name, description, category },
    { new: true }
  );
  if (!subCategory) {
    errorHelper('Subcategory not found.', 404);
  }

  await subCategory.save();

  res.status(200).json({ message: 'Subcategory updated!', Subcategory: subCategory });
});

// @desc    Delete subcategory by id
// @route   DELETE /subcategories/:id
// @access  Private
exports.deleteSubCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const subCategory = await SubCategory.findByIdAndDelete(id);

  if (!subCategory) {
    errorHelper('Subcategory not found.', 404);
  }

  res.status(200).json({ message: 'Subcategory deleted!', subcategory: subCategory });
});
