const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const promise = welcome();

// promise.then((result) => console.log("The result is: ", result));
//> The result is:  Provide me a question and I'll give you an answer...

// welcome().then((result) => console.log("The result is: ", result));
//> The result is:  Provide me a question and I'll give you an answer...

/**
 * console.log is a function, so you can just invoke it inside of a then block
 * and it will automatically print the resolution
 * ...is this the same with catch?
 */
welcome()
  .then(console.log)
  .then(() => {
    goodbye().then(console.log);
  });
//> Provide me a question and I'll give you an answer...

const question = "Will the weather be nice today?";
// tell(question).then(console.log);
//> Without a doubt.

// to display the question as well... we assign the resolution a reference var
tell(question)
  .then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  // we can use .catch() to display the error if no question is found
  .catch(console.log);
