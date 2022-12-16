const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return (
    axios
      // see if the object exists
      .get(url)
      // destructured data from the resolution (response)
      .then(({ data }) => {
        // if object doesn't exist throw 404. caught by catch block
        if (!data) throw new Error(`404`);
        // if it does return the put request to update it
        return axios.put(url, body);
      })
      // return the data response from the put request if it works
      .then(({ data }) => data)
      // this is the catch block for the thrown error above. it will
      // also catch an error from the above then block if there is one
      .catch(({ message }) => message)
  );
}

module.exports = {
  updateIfExists,
};
