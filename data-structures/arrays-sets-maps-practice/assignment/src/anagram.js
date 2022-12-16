/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  s1 = Array.from(s1.toLowerCase());
  s2 = Array.from(s2.toLowerCase());
  s1.sort();
  s2.sort();
  console.log(s1, s2);
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = anagram;
