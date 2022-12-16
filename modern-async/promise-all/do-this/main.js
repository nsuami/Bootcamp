const axios = require("axios");
const BASE_URL = "http://localhost:5000";
// returns a single promise once all have resolved or at least one has rejected
Promise.all([
  axios.get(`${BASE_URL}/constellations/UEUrlfX`),
  axios.get(`${BASE_URL}/constellations/zb8QvVt`),
  axios.get(`${BASE_URL}/constellations/32TN5F8`),
  // returning an array of promises as one promise means we have to traverse the array
])
  .then((response) => {
    console.log(response[0].data);
    console.log(response[1].data);
    console.log(response[2].data);
  })
  .catch(console.log);

// what about handling an unknown number of promises? >> index
