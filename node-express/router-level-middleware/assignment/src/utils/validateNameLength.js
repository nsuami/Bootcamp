function validateNameLength(req, res, next) {
  if (req.params.name.length > 2) {
    next();
  } else {
    next("Name length is too short.");
  }
}

module.exports = validateNameLength;
