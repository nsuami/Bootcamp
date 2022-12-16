function throwKeyword() {
  let secret = 42;
  let guess = 55;

  if (guess !== secret) {
    throw new Error("That's not the secret number!");
  }
}

// throwKeyword();

function one() {
  two();
}
function two() {
  three();
}
function three() {
  throw new Error("Here's the error");
}

// one();
/*> Error: Here's the error
        at three (C:\Users\austinjones\documents\thinkful\error-handling-basics\creating-errors\dothis.js:19:9)
        at two (C:\Users\austinjones\documents\thinkful\error-handling-basics\creating-errors\dothis.js:16:3)
        at one (C:\Users\austinjones\documents\thinkful\error-handling-basics\creating-errors\dothis.js:13:3)
        at Object.<anonymous> (C:\Users\austinjones\documents\thinkful\error-handling-basics\creating-errors\dothis.js:21:1)
*/

// throw "10";
/*> throw "10";
    ^
    10
    (Use `node --trace-uncaught ...` to show where the exception was thrown)
*/

function checkSecretPassword(password) {
  if (!password) throw "No password given!";
  return password === "SECRET";
}

// checkSecretPassword();
/*>   if (!password) throw "No password given!";
                     ^
    No password given!
    (Use `node --trace-uncaught ...` to show where the exception was thrown)
*/
// console.log(checkSecretPassword("password"));
//> false
console.log(checkSecretPassword("SECRET"));
//> true
