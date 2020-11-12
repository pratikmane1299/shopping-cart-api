/* eslint-disable no-unused-vars */
function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  if (err.status) {
    res.status(err.status);
  } else {
    res.status(500);
  }

  res.json({
    message: err.message,
    error: err,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

module.exports = {
  notFound,
  errorHandler,
};
