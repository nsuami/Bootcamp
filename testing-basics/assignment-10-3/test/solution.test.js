// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const { expect } = require("chai");

describe("findStudentScoreByName", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  it("should return the score of the input student name", () => {
    const expected = 7.4;
    const actual = findStudentScoreByName(students, "Morgan Sutton");
    expect(actual).to.equal(expected);
  });
  it("should return null if students does not contain the name", () => {
    const expected = null;
    const actual = findStudentScoreByName(students, "John");
    expect(actual).to.equal(expected);
  });
  it("should return null if no array is passed", () => {
    const expected = null;
    const actual = findStudentScoreByName(undefined, "Leo Yeon-Joo");
    expect(actual).to.equal(expected);
  });
  it("should return null if no name is passed", () => {
    const expected = null;
    const actual = findStudentScoreByName(students, undefined);
    expect(actual).to.equal(expected);
  });
  it("should return null if nothing is passed in", () => {
    const expected = null;
    const actual = findStudentScoreByName();
    expect(actual).to.equal(expected);
  });
});
