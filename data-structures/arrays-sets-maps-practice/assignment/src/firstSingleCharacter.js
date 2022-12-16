/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  if (!word.length) {
    return null;
  }
  const lettersAndCounts = {};
  for (let i = 0; i < word.length; i++) {
    if (lettersAndCounts[word.charAt(i)]) {
      lettersAndCounts[word.charAt(i)]++;
    } else {
      lettersAndCounts[word.charAt(i)] = 1;
    }
  }
  for (let key in lettersAndCounts) {
    if (lettersAndCounts[key] === 1) {
      return key;
    }
  }
  return null;
}

module.exports = firstSingleCharacter;
