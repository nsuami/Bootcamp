/**
 * return the union of two sets
 */
// O(n)
function union(s1, s2) {
  const result = new Set();
  for (let num of s1.values()) {
    result.add(num);
  }
  for (let num of s2.values()) {
    result.add(num);
  }
  return result;
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  const result = new Set();
  for (let num of s1.values()) {
    if (s2.has(num)) {
      result.add(num);
    }
  }
  for (let num of s2.values()) {
    if (s1.has(num)) {
      result.add(num);
    }
  }
  return result;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  if (s2.size === 0) {
    return s1;
  }
  const result = new Set();
  for (let num of s1.values()) {
    if (!s2.has(num)) {
      result.add(num);
    }
  }
  return result;
}

module.exports = { union, intersect, difference };
