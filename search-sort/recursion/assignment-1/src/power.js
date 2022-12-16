/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  if (exponent < 0) {
    throw new Error("exponent should be >= 0");
  }
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
  //> 1 => 1*2 => 2 => 2*2 => 4 => 4*2 => 8
  //> 0     1           2           3
}

module.exports = power;
