const asyncHandler = require('express-async-handler');
const { body } = require('express-validator');
const express = require('express');

const Category = require('../models/category');
const categoryController = require('../controllers/category');
const isAuth = require('../middlewares/is-auth');

const router = express.Router();

router.get('/categories', categoryController.getCategories);

router.post('/categories', isAuth, [
  body('name')
    .custom(asyncHandler(async (value, { req }) => {
      const category = await Category.findOne({ name: value });
      if (category) {
        return Promise.reject('Category already exists.');
      }
    }))
    .trim()
    .isAlpha()
    .isLength({ min: 3 }),
  body('description')
    .trim()
    .isLength({ min: 5 })
], categoryController.createCategory);

module.exports = router;
