const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  return (
    axios
      // go to/get response from url
      .get(`${BASE_URL}/constellations`)
      // then block: log a list of all names of each object in the data
      .then((response) =>
        console.log(response.data.map((element) => element.name))
      )
      // catch errors
      .catch((error) => console.log(error.message))
  );
}

function getConstellationsByQuadrant(inputQuad) {
  return (
    axios
      // get response
      .get(`${BASE_URL}/constellations`)
      // then block: log a list of all constellations in a certain quad
      .then((response) =>
        console.log(
          response.data.filter((element) => element.quadrant === inputQuad)
        )
      )
      .catch((error) => console.log(error.message))
  );
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
