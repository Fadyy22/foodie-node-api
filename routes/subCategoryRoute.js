const express = require('express');

const {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  uploadSubCategoryImage
} = require('../controllers/subCategoryController');

const {
  createSubCategoryValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator
} = require('../utils/validators/subCategoryValidator');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(uploadSubCategoryImage, createSubCategoryValidator, createSubCategory)
  .get(getSubCategories);

router
  .route('/:id')
  .get(getSubCategoryValidator, getSubCategory)
  .put(uploadSubCategoryImage, updateSubCategoryValidator, updateSubCategory)
  .delete(deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
