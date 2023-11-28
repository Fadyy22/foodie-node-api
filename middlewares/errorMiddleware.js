const globalError = (error, req, res) => {
  error.statusCode = error.statusCode || 500;

  res.status(error.statusCode).json({
    error: error,
    message: error.message
  });
};

module.exports = globalError;
