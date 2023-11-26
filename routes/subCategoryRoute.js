const express = require('express');

const {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  uploadSubCategoryImage,
  createFilterObject
} = require('../controllers/subCategoryController');

const {
  createSubCategoryValidator,
  getSubCategoriesValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator
} = require('../utils/validators/subCategoryValidator');

const recipeRoute = require('./recipeRoute');

const router = express.Router({ mergeParams: true });

router.use('/:subcategoryId/recipes', recipeRoute);

router
  .route('/')
  .post(uploadSubCategoryImage, createSubCategoryValidator, createSubCategory)
  .get(createFilterObject, getSubCategoriesValidator, getSubCategories);

router
  .route('/:id')
  .get(getSubCategoryValidator, getSubCategory)
  .put(uploadSubCategoryImage, updateSubCategoryValidator, updateSubCategory)
  .delete(deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
