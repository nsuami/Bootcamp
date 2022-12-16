/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const charSet = new Set();
  // splits the string into an array of its chars
  word.split("").forEach((char) => {
    // check if the set has the char, if it does, delete it, if not, add it
    if (charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  });
  // if there is more than 1 char in this set, there is no chance for any perm
  // of the input string to be a palindrome
  return charSet.size <= 1;
}

module.exports = permutationPalindrome;
