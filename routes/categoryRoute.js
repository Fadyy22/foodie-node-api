const express = require('express');

const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator
} = require('../utils/validators/categoryValidator');

const isAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(getCategories)
  .post(isAuth, createCategoryValidator, createCategory);

router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(isAuth, updateCategoryValidator, updateCategory)
  .delete(isAuth, deleteCategory);

module.exports = router;
