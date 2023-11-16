const asyncHandler = (controllfunction) => (req, res, next) =>
  Promise.resolve(controllfunction(req, res, next)).catch(next);

module.exports = asyncHandler;
