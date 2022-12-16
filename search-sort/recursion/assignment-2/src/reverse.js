/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  if (text === "") return "";
  console.log("TEXT:", text);
  console.log("ARGUMENT:", text.substr(1));
  console.log("FIRST:", text.charAt(0));
  return reverse(text.substr(1)) + text.charAt(0);
  //> ello + h //> BANK(h)
  //> llo + e + h //> BANK(eh)
  //> lo + l + e + h //> BANK(leh)
  //> o + l + l + e + h //> BANK(oleh)
} //>                         olleh

console.log("CALL:");
console.log(reverse("abcdef"));
module.exports = reverse;
