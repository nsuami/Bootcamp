/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
// const sort = require("./sort");
function searchByEmail(email, customers) {
  // sort O(n)
  // binarySearch O(2n/2) => O(n)
  // for (let i = 0; i < customers.length; i++) {
  //   if (customers[i].email === email) {
  //     return i;
  //   }
  // }

  return customers.findIndex((ele) => ele.email === email);
}

module.exports = searchByEmail;
