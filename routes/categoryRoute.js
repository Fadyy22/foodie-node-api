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

const subCategoryRoute = require('../routes/subCategoryRoute');

const router = express.Router();

router.use('/:categoryId/subcategories', subCategoryRoute);

router
  .route('/')
  .post(uploadCategoryImage, createCategoryValidator, createCategory)
  .get(getCategories);

router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(uploadCategoryImage, updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;
