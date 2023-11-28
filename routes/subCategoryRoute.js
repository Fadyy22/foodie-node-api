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

const isAuth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/adminMiddleware');

const recipeRoute = require('./recipeRoute');

const router = express.Router({ mergeParams: true });

router.use('/:subcategoryId/recipes', recipeRoute);

router
  .route('/')
  .post(isAuth, isAdmin, uploadSubCategoryImage, createSubCategoryValidator, createSubCategory)
  .get(createFilterObject, getSubCategoriesValidator, getSubCategories);

router
  .route('/:id')
  .get(getSubCategoryValidator, getSubCategory)
  .put(isAuth, isAdmin, uploadSubCategoryImage, updateSubCategoryValidator, updateSubCategory)
  .delete(isAuth, isAdmin, deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
