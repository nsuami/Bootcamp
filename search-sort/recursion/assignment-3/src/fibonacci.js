/**
 * Return the nth fibonacci number
 * @param {integer} n
 */
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
