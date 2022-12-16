/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isEqual;
