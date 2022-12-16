/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(currentLength, requiredLength, saleLength) {
  let count = 0;
  for (let i = currentLength; i < requiredLength; count++) {
    i += saleLength;
  }
  return count;
}
/**
 The cable problem
 Implement algorithm 2 here
*/
function cable2(currentLength, requiredLength, saleLength) {
  return Math.ceil((requiredLength - currentLength) / saleLength);
  //   const distance = requiredLength - currentLength;
  //   const total = Math.ceil(distance / saleLength);
  //   return total;
}

module.exports = { cable1, cable2 };
