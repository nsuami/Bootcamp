const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  return Promise.all(
    ids.map((id) => {
      return axios.delete(`${BASE_URL}/constellations/${id}`).then(() => {
        return { id };
      });
    })
  );
}

module.exports = {
  bulkDelete,
};
