// Write your tests here!
const { expect } = require("chai");
const findStudentByName = require("../src/solution");

describe("findStudentByName", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  it("should exist as a function", () => {
    expect(findStudentByName).to.exist &&
      expect(findStudentByName).to.be.a("function");
  });
  it("should return the student object if given a matching name", () => {
    const expected = { name: "Leo Yeon-Joo", score: 8.9 };
    const actual = findStudentByName(students, "Leo Yeon-Joo");
    // to.eql is DEEPLY EQUAL which compares the content inside of reference data
    expect(actual).to.eql(expected);
  });
  it("should return 'No student with that name found!' if studentName is not found", () => {
    const actual = findStudentByName(students, "bob");
    expect(actual).to.be.null;
  });
  it("should return null if no student name is passed", () => {
    const actual = findStudentByName(students, undefined);
    expect(actual).to.be.null;
  });
  it("should return null if no students array is passed", () => {
    const noStudentsPass = findStudentByName(undefined, "Leo Yeon-Joo");
    const noArgsPass = findStudentByName();
    expect(noStudentsPass).to.be.null && expect(noArgsPass).to.be.null;
  });
});
