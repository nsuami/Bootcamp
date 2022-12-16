const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  try {
    return axios.put(
      `${BASE_URL}/constellations/${constellation.id}`,
      constellation
    );
  } catch {
    return Promise.reject({ error: "Inputted argument must be an array." });
  }
}

function bulkImport(constellations) {
  if (!constellations || !Array.isArray(constellations)) {
    return Promise.reject({
      error: "Inputted argument must be an array.",
    });
  }
  // check IF EACH constellation isValid()
  constellations.forEach((element) => {
    // if not return rejected promise with an object containing error and message
    if (!isValid(element)) {
      return Promise.reject({
        error: "All constellations must include relevant fields.",
      });
    }
  });
  // if all constellations are valid, create requests using update function.
  const promises = constellations.reduce((acc, element) => {
    // store the requests in an array
    acc.push(update(element));
    return acc;
  }, []);
  // use promise.allSettled() to return a promise that evaluates all of the requests
  return Promise.allSettled(promises);
}

module.exports = { bulkImport, update };
