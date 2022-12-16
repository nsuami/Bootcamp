const axios = require("axios");

const url = "http://localhost:5000/constellations";
/**
 * axios is a promise based package/module that helps us
 * make requests in js
 * doc: https://www.npmjs.com/package/axios
 */
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// axios
//   .post(url, {
//     name: "Ara",
//     meaning: "Altar",
//     starsWithPlanets: 7,
//     quadrant: "SQ3",
//     id: "DVaSPTf",
//   })
//   .then((response) => console.log(response.data));

// axios
//   .delete(`${url}/DVaSPTf`)
//   .then((response) => console.log(response.status))
//   .catch(console.log);
