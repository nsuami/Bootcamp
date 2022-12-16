/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, studentName) {
  if (!studentName || !students) return null;
  const found = students.find((element) => element.name === studentName);
  if (!found) return null;
  return found;
}

module.exports = findStudentByName;
