const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function sortByName(customers) {
  const sortedByLastName = sort((a, b) => b.lastName < a.lastName, customers);
  const sortedByFirstName = sort((a, b) => {
    return a.lastName === b.lastName ? b.firstName < a.firstName : null;
  }, sortedByLastName);
  return sortedByFirstName;
}

module.exports = sortByName;
