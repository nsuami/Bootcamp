const knex = require("../db/connection");

function averageRating() {
  return knex("restaurants")
    .avg("rating")
    .then((response) => ({ average_rating: Number(response[0].avg) }));
}

function count() {
  return knex("restaurants")
    .count("restaurant_id")
    .then((res) => {
      res[0].count = parseInt(res[0].count, 10);
      return res[0];
    });
}

function create(newRestaurant) {
  return knex("restaurants")
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex("restaurants").where({ restaurant_id }).del();
}

function list() {
  return knex("restaurants").select("*");
}

function read(restaurant_id) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

function readHighestRated() {
  return knex("restaurants")
    .select("restaurant_name", "cuisine", "address", "rating as max")
    .orderBy("rating", "desc")
    .first();
}

function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  read,
  readHighestRated,
  update,
};
