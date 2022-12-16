const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

const leo = {
  name: "Leo",
  meaning: "Lion",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};

// it is not safe to assume that the GET promise will finish before the
// POST does, so we have to change this
// axios.get(constellationsUrl).then(({ data }) => console.log(data));
// axios.post(constellationsUrl, leo).then(({ data }) => console.log(data));

// axios.get(constellationsUrl).then(({ data }) => {
//   console.log(data);
//   return axios
//     .post(constellationsUrl, leo)
//     .then(({ data }) => console.log(data));
// });

axios
  // get constellations
  .get(constellationsUrl)
  // destructure data from 'response'
  .then(({ data }) => {
    // if the constellation already exists in the database throw an error
    // caught by the next catch block
    const exists = data.find(({ name }) => name === leo.name);
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    // otherwise return post request and log it
    return axios.post(constellationsUrl, leo);
  })
  .then(({ data }) => console.log(data))
  // log the thrown error
  .catch(console.log);

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios.post(constellationsUrl, leo);
  })
  .then(({ data }) => console.log(data))
  .catch(console.log);
