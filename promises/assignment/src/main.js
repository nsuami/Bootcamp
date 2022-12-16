const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  tell(question)
    .then((fortune) => {
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${fortune}`);
    })
    .catch((error) => console.log(`There was an error: ${error}`));
}

function fullSession(question) {
  // first promise called, then doesnt execute until all promises called
  welcome().then(console.log);
  // second promise called, thens don't execute until first promise thens do
  tell(question)
    .then((fortune) => {
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${fortune}`);
    })
    .catch((error) => console.log(`There was an error: ${error}`));

  // third promise called, then doesn't execute until all other thens do in this case
  goodbye().then(console.log);

  // welcome().then(console.log);

  // tell(question)
  //   .then((fortune) => {
  //     console.log(`Your question was: ${question}`);
  //     console.log(`Your fortune is: ${fortune}`);
  //   })
  //   .catch((error) => console.log(`There was an error: ${error}`));

  // goodbye().then(console.log);
}

fullSession("A");
module.exports = { getFortune, fullSession };
