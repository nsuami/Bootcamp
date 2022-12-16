function validateZip(req, res, next) {
  // const check = /^[0-9]+$/;
  // check.test(req.params.zip);
  const digitsOnly = (str) => [...str].every((c) => `0123456789`.includes(c));
  const zip = req.params.zip;

  if (zip.length !== 5 || isNaN(zip)) {
    next(`Zip (${zip}) is invalid!`);
  }

  next();
}

module.exports = validateZip;
