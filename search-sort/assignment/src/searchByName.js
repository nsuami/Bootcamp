const sortByName = require("./sortByName");
/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  customers = sortByName(customers);
  let start = 0;
  let end = customers.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guessFirst = customers[mid].firstName;
    const guessLast = customers[mid].lastName;

    if (guessFirst === firstName && guessLast === lastName) {
      return mid;
    }

    if (guessLast < lastName) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    if (guessLast === lastName) {
      if (guessFirst < firstName) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

module.exports = searchByName;
