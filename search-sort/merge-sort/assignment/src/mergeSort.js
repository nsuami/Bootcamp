function mergeSort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }

    const middle = Math.floor(elements.length / 2);

    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);

    const leftElementsSorted = mergeSort(compare, leftElements);
    const rightElementsSorted = mergeSort(compare, rightElements);

    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

/**
 * Merges two sorted arrays
 *
 * @param compare
 *  Function to compare elements of the array
 * @param left
 *  The left sorted array
 * @param right
 *  The right sorted array
 * @returns {*[]}
 *  The left and right sorted arrays merged in sorted order
 */

function merge(compare, left, right) {
  const sorted = [];

  while (left.length && right.length) {
    const comparison = compare(left[0], right[0]);

    if (comparison < 0) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left, right);
}

module.exports = mergeSort;
