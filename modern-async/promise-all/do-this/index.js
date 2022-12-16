const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function getConstellations(ids) {
  // map over the id's and update the url
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    // call the promise
    return axios.get(url);
  });
  // promise.all will call all of the promises from the map loop above
  return Promise.all(promises);
}

const ids = ["KGQIwSq", "32TN5F8"];
// pass ids in
getConstellations(ids).then((response) => {
  response.forEach((element) => console.log(element.data));
});
/*
    [
      { name: "Eridanus", ... },
      { name: "Draco", ... }
    ]
  */
