/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  if (!students || !name) return null;
  const found = students.find((element) => element.name === name);
  if (!found) return null;
  return found.score;
}

module.exports = findStudentScoreByName;
