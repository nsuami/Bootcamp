function reverse(phrase) {
  let result = "";
  for (let i = 0; i < phrase.length; i++) {
    result = phrase[i] + result;
  }
  return result;
}

console.log(reverse("Hello World!"));
