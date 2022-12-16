const axios = require("axios");
const BASE_URL = "http://localhost:5000";

async function getConstellation(id) {
  //> Placeholder function body
  return true;
}

// getConstellation().then(console.log); //> true

// async function getConstellationNameById(id) {
//   // const url = `${BASE_URL}/constellations/n2Ozp`;
//   const url = `${BASE_URL}/constellations/${id}`;
//   // const 'response' data destructured = this promise's resolution
//   // await will literally wait for a response from the promise
//   const { data } = await axios.get(url);

//   return data.name;
// }

// getConstellationNameById("n2OEOzp")
//   .then(console.log) //> "Libra"
//   .catch((error) => console.log(error.message)); //> Request failed with status code 404

// ERROR HANDLING

async function getConstellationNameById(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  try {
    const { data } = await axios.get(url);
    return data.name;
  } catch (error) {
    throw `Constellation with id of ${id} could not be found.`;
  }
}

getConstellationNameById("n2OEOzp").then(console.log).catch(console.log);
getConstellationNameById("error").catch(console.log);
