const axios = require("axios");
const BASE_URL = "http://localhost:5000";

const data = {
  id: "dFBbdkr",
  name: "Vela",
  meaning: "Sails",
  starsWithPlanets: 7,
  quadrant: "SQ2",
};

// we always want to return similar types. It is good to return a promise in both
// branches here. Returning false instead of a promise that returns false
// would be problematic

function update(id, body) {
  // if no id or no body is passed, return a rejected promise that says false
  if (!id || !body) return Promise.reject(false);
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.put(url, body);
}

// no body is passed in... so there's nothing to update
update("UPtAzfV")
  // log out a successful update
  .then(({ data }) => console.log(data))
  .catch(console.log); //> false

update("UPtAzfV", { name: data.name })
  // log out a successful update
  .then(({ data }) => console.log(data))
  .catch(console.log); //> false

axios
  .get("http://localhost:5000/constellations")
  .then((response) => console.log(response.data));
