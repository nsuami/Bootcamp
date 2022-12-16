const knex = require("../db/connection");

function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function read(supplier_id) {
  return knex("suppliers").select("*").where({ supplier_id });
}

function update(updatedSupplier) {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: supplierId })
    .update(updatedSupplier, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(supplier_id) {
  return suppliers.where({ supplier_id }).del();
}

module.exports = {
  create,
  read,
  update,
  destroy: destroy,
};
