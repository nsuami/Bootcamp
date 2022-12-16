const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  const res = await generateSlogan(request);
  console.log(`Your request was: ${request}`);
  console.log(`Your slogan is: ${res.slogan}`);
}

async function fullSession(request) {
  const message = await generateMessage();
  console.log(message);
  await getSlogan(request);
  const goodbyeMessage = await goodbye();
  console.log(goodbyeMessage);
}

module.exports = { getSlogan, fullSession };
