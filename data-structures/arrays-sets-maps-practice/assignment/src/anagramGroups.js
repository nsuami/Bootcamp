/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  if (words.length === 0) {
    return [];
  }
  // solve with a hash map
  // ["east", "cars", "acre", "arcs", "teas", "eats", "race"];
  let hash = {};
  // split the letters and sort them alphabetically, add to the hash
  words.forEach((element) => {
    const letters = element.split("").sort();
    hash[letters] ? hash[letters].push(element) : (hash[letters] = [element]);
  });
  return Object.values(hash);
}

module.exports = anagramGroups;
