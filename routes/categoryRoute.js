const express = require('express');

const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  uploadCategoryImage
} = require('../controllers/categoryController');

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator
} = require('../utils/validators/categoryValidator');

const isAuth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/adminMiddleware');

const subCategoryRoute = require('./subCategoryRoute');
const recipeRoute = require('./recipeRoute');

const router = express.Router();

router.use('/:categoryId/subcategories', subCategoryRoute);

router.use('/:categoryId/recipes', recipeRoute);

router
  .route('/')
  .post(isAuth, isAdmin, uploadCategoryImage, createCategoryValidator, createCategory)
  .get(getCategories);

router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(isAuth, isAdmin, uploadCategoryImage, updateCategoryValidator, updateCategory)
  .delete(isAuth, isAdmin, deleteCategoryValidator, deleteCategory);

module.exports = router;
