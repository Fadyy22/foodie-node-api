const errorHelper = require('../utils/error');

module.exports = (req, res, next) => {
  if (req.user.role !== 'admin') {
    errorHelper('Not authorized.', 403);
  }
  next()
}
