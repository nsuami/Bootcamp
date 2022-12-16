/* 
console.log(require("./plants.js")); this line is a checkpoint --
in plants.js, with the export statement commented out, line 2
will return a blank object by default. "By default, if you require 
a file that does not have a module.exports statement, you will receive 
an empty object." 
*/


/*
this is the line of code to call a function from plants.js, not an object
*/
// let find = require("./plants");
import findPlantById from "./plants.js";

let plants = [
    { id: 1, name: "Garden Rocket Arugula" },
    { id: 2, name: "Watercress" },
    { id: 3, name: "Royal Rose Radicchio" },
];
// importedFile.function(arguments)

/*
calls the importedFile.targetFunction(with argument of plants array
and index of 2 in that array)
*/

// { id: 2, name: 'Watercress' }
// (nameOfModuleInThisScope.givenNameOfFunctionExportedInPlantsJS)
console.log(findPlantById(plants, 2));

// test for plants.js import function, not object
// const result = find(plants, 2);
// console.log(result);