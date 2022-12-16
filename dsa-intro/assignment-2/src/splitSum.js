/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */
function splitSum1(tours) {
  const total = tours.reduce((a, b) => a + b, 0);
  let preSum = 0;
  let postSum = total;
  let smallest = Infinity;

  for (let i = 0; i < tours.length - 1; i++) {
    preSum += tours[i];
    postSum -= tours[i];
    const diff = Math.abs(preSum - postSum);
    if (diff < smallest) {
      smallest = diff;
    }
  }
  return smallest;
}

/**
 * Write a function named splitSum2 that implements algorithm 2 here
 */

function splitSum2(tours) {
  let smallest = Infinity;
  for (let i = 0; i < tours.length - 1; i++) {
    let preSum = 0;
    let postSum = 0;

    for (let j = 0; j <= i; j++) {
      preSum += tours[j];
    }

    for (let j = i + 1; j < tours.length; j++) {
      postSum += tours[j];
    }

    const diff = Math.abs(preSum - postSum);
    if (diff < smallest) {
      smallest = diff;
    }
  }
  return smallest;
}

module.exports = { splitSum1, splitSum2 };
