const asyncHandler = require('express-async-handler');

const deleteImageHelper = require('../utils/deleteImage');
const errorHelper = require('../utils/error');

exports.createOne = Model => asyncHandler(async (req, res) => {
  // if (!req.file) {
  //   errorHelper('No image provided.', 422);
  // }
  if (req.file) {
    req.body.image = req.file.path.replace('uploads\\', '').replace('\\', '/');
  }

  const document = await Model.create(req.body);

  res.status(201).json({
    message: 'document created!',
    document: document
  });
});

exports.getAll = (Model, populateOpt) => asyncHandler(async (req, res) => {
  let filteredDocuments;
  let query = Model.find(req.filterObject);

  if (populateOpt) {
    query = query.populate({ path: populateOpt, select: 'name  -category' });
  }
  const documents = await query;

  if (req.query.search) {
    filteredDocuments = documents.filter(doc => {
      return (
        doc.name.match(new RegExp(req.query.search, 'i')) ||
        doc.description.match(new RegExp(req.query.search, 'i')) ||
        doc.ingredients.some(ingredient => ingredient.match(new RegExp(req.query.search, 'i'))) ||
        doc.category.name.match(new RegExp(req.query.search, 'i')) ||
        doc.category.description.match(new RegExp(req.query.search, 'i')) ||
        doc.subcategory.name.match(new RegExp(req.query.search, 'i')) ||
        doc.subcategory.description.match(new RegExp(req.query.search, 'i'))
      );
    });
  }

  res.status(200).json({ documents: filteredDocuments || documents });
});

exports.getOne = (Model, populateOpt) => asyncHandler(async (req, res) => {
  let query = Model.findById(req.params.id);

  if (populateOpt) {
    query = query.populate(populateOpt);
  }

  const document = await query;
  if (!document) {
    errorHelper('document not found.', 404);
  }

  delete document._doc.password;
  res.status(200).json({ document: document });
});

exports.updateOne = Model => asyncHandler(async (req, res) => {
  if (req.file) {
    req.body.image = req.file.path.replace('uploads\\', '').replace('\\', '/');
  }

  // if (!image) {
  //   errorHelper('No image provided.', 422);
  // }

  const document = await Model.findById(req.params.id);
  if (!document) {
    errorHelper('document not found.', 404);
  }

  if (req.body.image && document.image) {
    deleteImageHelper(document.image);
  }

  const newDocument = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json({ message: 'document updated!', document: newDocument });
});

exports.deleteOne = Model => asyncHandler(async (req, res) => {
  const document = await Model.findByIdAndDelete(req.params.id);

  if (!document) {
    errorHelper('document not found.', 404);
  }

  if (document.image) {
    deleteImageHelper(document.image);
  }

  res.status(200).json({ message: 'document deleted!' });
});
