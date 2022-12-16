// Write your tests here!
const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect;

describe("partitionStudentsByScore", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
    { name: "John Smith", score: 9.1 },
    { name: "Dan Appleseed", score: 7.9 },
    { name: "Christine Swift", score: 8.5 },
  ];

  it("should exist as a function", () => {
    expect(partitionStudentsByScore).to.exist &&
      expect(partitionStudentsByScore).to.be.a("function");
  });
  it("should return students partitioned into two arrays if given a score", () => {
    const expected = [
      [
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Dan Appleseed", score: 7.9 },
      ],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Natalee Vargas", score: 9.2 },
        { name: "John Smith", score: 9.1 },
        { name: "Christine Swift", score: 8.5 },
      ],
    ];
    const actual = partitionStudentsByScore(students, 8.4);
    expect(actual).to.eql(expected);
  });
  it("should return an array of two empty arrays if no students array is argued", () => {
    const expected = [[], []];
    const actual = partitionStudentsByScore(undefined, 8.4);
    expect(actual).to.eql(expected);
  });
  it("should put all students into one array if the dividing score so pleases", () => {
    const expected = [
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
        { name: "John Smith", score: 9.1 },
        { name: "Dan Appleseed", score: 7.9 },
        { name: "Christine Swift", score: 8.5 },
      ],
      [],
    ];
    const actual = partitionStudentsByScore(students, 9.2);
    expect(actual).to.eql(expected);
  });
  it("should return 'Incorrect input' if any arguments are the wrong type", () => {
    const expected = "Incorrect input";
    const actualWrongStudentsArg = partitionStudentsByScore(5, 5);
    const actualWrongScoreArg = partitionStudentsByScore(students, []);
    expect(actualWrongStudentsArg).to.equal(expected) &&
      expect(actualWrongScoreArg).to.equal(expected);
  });
});
