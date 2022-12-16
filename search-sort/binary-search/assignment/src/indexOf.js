// function indexOf(compare, sortedElements) {
//   if (Array.isArray(sortedElements)) {
//     let lowerIndex = 0;
//     let upperIndex = sortedElements.length - 1;
//     while (lowerIndex <= upperIndex) {
//       const index = Math.floor((upperIndex + lowerIndex) / 2);
//       const comparison = compare(sortedElements[index], index, sortedElements);

//       if (comparison > 0) {
//         lowerIndex = index + 1;
//       }

//       if (comparison === 0) {
//         return index;
//       }

//       if (comparison < 0) {
//         upperIndex = index - 1;
//       }
//     }
//   }
//   return -1;
// }

// function indexOf(compare, sortedElements) {
//   if (Array.isArray(sortedElements)) {
//     let lowerIndex = 0;
//     let upperIndex = sortedElements.length - 1;
//     return traverse(compare, sortedElements, lowerIndex, upperIndex);
//   }
//   return -1;
// }

// function traverse(compare, sortedElements, lowerIndex, upperIndex) {
//   if (lowerIndex > upperIndex) {
//     return -1;
//   }
//   const index = Math.floor((upperIndex + lowerIndex) / 2);
//   const comparison = compare(sortedElements[index], index, sortedElements);

//   if (comparison > 0) {
//     lowerIndex = index + 1;
//   } else if (comparison < 0) {
//     upperIndex = index - 1;
//   } else {
//     return index;
//   }

//   return traverse(compare, sortedElements, lowerIndex, upperIndex);
// }

function indexOf(compare, sortedElements) {
  if (Array.isArray(sortedElements)) {
    let lowerIndex = 0;
    let upperIndex = sortedElements.length - 1;

    while (lowerIndex <= upperIndex) {
      const index = Math.floor((upperIndex + lowerIndex) / 2);

      const comparison = compare(sortedElements[index], index, sortedElements);

      if (comparison > 0) {
        lowerIndex = index + 1;
      }

      if (comparison === 0) {
        return index;
      }

      if (comparison < 0) {
        upperIndex = index - 1;
      }
    }
  }
  return -1;
}

module.exports = indexOf;
