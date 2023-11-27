const express = require('express');

const {
  createCollection,
  getCollection,
  updateCollection,
  deleteCollection,
} = require('../controllers/collectionController');

const {
  createCollectionValidator,
  getCollectionValidator,
  updateCollectionValidator,
  deleteCollectionValidator
} = require('../utils/validators/collectionValidator');

const isAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .post(isAuth, createCollectionValidator, createCollection)

router
  .route('/:id')
  .get(isAuth, getCollectionValidator, getCollection)
  .put(isAuth, updateCollectionValidator, updateCollection)
  .delete(isAuth, deleteCollectionValidator, deleteCollection)
module.exports = router;
