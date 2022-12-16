const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
    const response = await tell(question);
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${response}`);
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }
}

async function fullSession(question) {
  try {
    console.log(await welcome());
    await getFortune(question);
    console.log(await goodbye());
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }

  // try {
  //   await getFortune(question);
  // } catch (err) {
  //   console.log(`There was an error: ${err}`);
  // }

  // try {
  //   console.log(await goodbye());
  // } catch (err) {
  //   console.log(`There was an error: ${err}`);
  // }
}

module.exports = { getFortune, fullSession };
