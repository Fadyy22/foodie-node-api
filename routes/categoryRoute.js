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

const subCategoryRoute = require('../routes/subCategoryRoute');

const isAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router.use('/:categoryId/subcategories', subCategoryRoute);

router
  .route('/')
  .get(getCategories)
  .post(createCategoryValidator, createCategory);

router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;
