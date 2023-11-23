const express = require('express');

const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory
} = require('../controllers/categoryController');

const {
  getCategoryValidator,
  createCategoryValidator
} = require('../utils/validators/categoryValidator');

const isAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(isAuth, createCategoryValidator, createCategory);

router.route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(isAuth, createCategoryValidator, updateCategory);

module.exports = router;
