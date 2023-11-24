const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('SubCategory', subCategorySchema);
