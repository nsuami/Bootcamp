/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  // sort
  // check to see if index[0] is 1, if not 1 is missing
  // iterate through and check the difference between index and index + 1
  // if it is not 1, then the missing number is the average of the sum of the two checked
  // length is 50, max index is called 49, so the last iteration will be at 49
  // which makes next out of bounds on the last iteration, so length - 1
  // Complexity = O(2n)
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  if (numbers[0] !== 1) {
    return 1;
  }

  if (numbers[numbers.length - 1] !== numbers.length + 1) {
    return numbers.length + 1;
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i];
    const next = numbers[i + 1];
    const diff = next - current;

    if (diff === 2) {
      return (next + current) / 2;
    }
  }
  return "no missing number";
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  // find expected sum
  // find real sum
  // return difference
  // length = 50: last index = 49; expected length = 51;
  return (
    ((numbers.length + 2) * (numbers.length + 1)) / 2 -
    numbers.reduce((acc, ele) => acc + ele)
  );
}

module.exports = { missingNumberBruteForce, missingNumberSum };
