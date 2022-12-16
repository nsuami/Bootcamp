/**
 The missing number problem
 Implement algorithm 1 here
*/
function missing1(A) {
  const N = A.length + 1;
  for (let i = 1; i < N; i++) {
    let found = false;
    let j = 0;
    while (found === false && j < A.length) {
      if (i === A[j]) {
        found = true;
      }
      j++;
    }
    if (!found) return i;
  }
}

/**
The missing number problem
Implement algorithm 2 here
*/
function missing2(A) {
  const N = A.length + 1;
  let fullSum = 0;
  for (let i = 1; i <= N; i++) {
    fullSum += i;
  }
  const sum = A.reduce((acc, ele) => {
    return acc + ele;
  }, 0);
  return fullSum - sum;
}

module.exports = { missing1, missing2 };
