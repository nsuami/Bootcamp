// THE REDUCE METHOD
/**
 * it is another way to use the accumulator pattern
 * for loop example
 */
// const areas = [768, 1004.2, 433.1];
// let result = 0;
// for (let i = 0; i < areas.length; i++) {
//   result += areas[i];
// }
// console.log(result); //> 2205.3

/**
 * the same example using .reduce()
 * reduce method takes a function and an optional starting value as arguments
 * The areas and accumulator values are defined.
 * The reduce() method takes a function that adds the accumulator and the current element.
 * The first iteration will add 0 and 768.
 * The result of the first iteration will become the accumulator in the next iteration.
 * Once all iterations are finished, the value is stored in the result variable.
 * The result is logged out.
 */
const areas = [768, 1004.2, 433.1];
let accumulator = 0;
//this line is a loop
let result = areas.reduce((acc, area) => acc + area, accumulator);
console.log(result); //> 2205.3

let resultLog = areas.reduce((acc, area, index) => {
    console.log(`index: ${index}`, `accumulator:${accumulator}`,
        `acc: ${acc}`, `area: ${area}`);
    return acc + area;
}, accumulator);
console.log(resultLog);

/**
 * index: 0 accumulator:0 acc: 0 area: 768
 * index: 1 accumulator:0 acc: 768 area: 1004.2
 * index: 2 accumulator:0 acc: 1772.2 area: 433.1
 * 2205.3
 */

// remove the initial value 'accumulator'
let resultOneParam = areas.reduce((acc, area, index) => {
    console.log(`index: ${index}`, `acc: ${acc}`, `area: ${area}`);
    return acc + area;
});
console.log(resultOneParam);

// complex usage
/**
 * the initial value that reduce() uses can be any data type, just like
 * how the accumulator could be anything when you're using the accumulator
 * pattern. This allows more complex usage of the reduce()
 */

const parks = [
    { name: "Acadia", areaInSquareKm: 198.6 },
    { name: "Crater Lake", areaInSquareKm: 741.5 },
    { name: "Kenai Fjords", areaInSquareKm: 2710 },
    { name: "Zion", areaInSquareKm: 595.9 },
]

const resultObj = parks.reduce((acc, park) => {
    // bracket notation then dot notation = area in square km
    // key value declaration
    // acc is the accumulator, park is the selector
    acc[park.name] = park.areaInSquareKm;
    return acc;
}, {});

console.log(resultObj);