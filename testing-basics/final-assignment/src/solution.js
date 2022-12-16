/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  const result = [[], []];
  if (!students) return result;
  if (typeof students !== "object" || typeof score !== "number") {
    return "Incorrect input";
  }
  students.forEach((element) => {
    if (element.score <= score) {
      result[0].push(element);
    } else {
      result[1].push(element);
    }
  });
  return result;
}

module.exports = partitionStudentsByScore;
