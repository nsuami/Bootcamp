const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  return axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
}

function create(body) {
  return axios
    .post(`${BASE_URL}/constellations`, body)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
}

function show(id) {
  return axios
    .get(`${BASE_URL}/constellations/${id}`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
}

function update(id, body) {
  return axios
    .put(`${BASE_URL}/constellations/${id}`, body)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
}

function destroy(id) {
  return axios
    .delete(`${BASE_URL}/constellations/${id}`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
