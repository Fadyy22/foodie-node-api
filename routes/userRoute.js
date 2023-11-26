const express = require('express');

const {
  getUser
} = require('../controllers/userController');

const {
  getUserValidator
} = require('../utils/validators/userValidator');

const router = express.Router();

router
  .route('/:id')
  .get(getUserValidator, getUser);

module.exports = router;
