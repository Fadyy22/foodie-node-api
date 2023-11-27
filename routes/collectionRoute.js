const express = require('express');

const {
  createCollection,
  deleteCollection
} = require('../controllers/collectionController');

const {
  getCollectionValidator,
  deleteCollectionValidator
} = require('../utils/validators/collectionValidator');

const isAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .post(isAuth, createCollection)

router
  .route('/:id')
  .delete(isAuth, deleteCollectionValidator, deleteCollection)
module.exports = router;
