/**
 * Implement an algorithm that sorts the array then returns the smallest and largest
 */
function largestAndSmallestSort(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
  const smallest = numbers[0];
  const largest = numbers[numbers.length - 1];
  return [smallest, largest];
}

console.log(largestAndSmallestSort([-3, -4, -7, -6, -9, -5, -2, -8, -1]));
/**
 * Implement an algorithm that uses iteration to find the smallest and largest
 */
function largestAndSmallestIterate(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    const cur = numbers[i];
    if (cur < min) {
      min = cur;
    }
    if (cur > max) {
      max = cur;
    }
  }
  return [min, max];
}

module.exports = { largestAndSmallestIterate, largestAndSmallestSort };
