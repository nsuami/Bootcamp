const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
];

/**
 * write a loop to find an item in an array
 */

// let found = null;
// for (let i = 0; i < parks.length; i++) {
//     const park = parks[i]
//     if (park.name === "Biscayne") found = park;
// }
// console.log(found); // { name: 'Biscayne', rating: 4.2 }

// function paramater is park and it has one line that is a boolean return
// const parkNameIsBiscayne = park => park.name === "Biscayne";
// let found = null;
// for (let i = 0; i < parks.length; i++) {
//     const park = parks[i]
//     // pass 'park' to parkNameIsBiscayne and test if park.nane for that
//     // object is equal to biscayne
//     if ( parkNameIsBiscayne(park) ) found = park;
// }
// console.log(found) // { name: 'Biscayne', rating: 4.2 }

// THE FIND METHOD loops through... for you?
const found = parks.find(park => park.name === "Biscayne");
console.log(found); //> { name: "Biscayne", rating: 4.2 }

// this returns the object. We can also put .name at the end of this
// to return the name of the park only...
// const foundRating = parks.find(park => park.rating === 4.1);
// console.log(foundRating); //> { name: 'Indiana Dunes', rating: 4.1 }
const foundRating = parks.find(park => park.rating === 4.1).name;
// console.log(foundRating); //> Indiana Dunes


/**
 * let result = [];
 * for (let i = 0; i < parks.length; i++) {
 *     const park = parks[i];
 *     if (park.rating >= 4.5) result.push(park);
 * }
 * console.log(result);
 */
// THE FILTER METHOD builds a new array of only the items that
// match a condition
//RETURNS AN ARRAY

// const result = parks.filter(park => park.rating === 4.5);
// console.log(result);

const result = parks.filter(park => park.name.charAt(0) === "G");
// console.log(result);
//> { name: 'Grand Canyon', rating: 5 }, { name: 'Gateway Arch', rating: 4.5 }

/**
 * const result = [];
 * for (let i = 0; i < parks.length; i++) {
 *     result.push(parks[i].name);
 * }
 * console.log(result); 
 */

const mapped = parks.map(park => park.name);
// console.log(mapped);
//> [ 'Biscayne', 'Grand Canyon', 'Gateway Arch', 'Indiana Dunes' ]

/**
 * THE SOME METHOD
 * let result = false;
 * for (let i = 0; i < parks.length; i++) {
 *     if (parks[i].rating > 4) result = true;
 * }
 * console.log(result); // true
 * The some method checks to see if any element in the array matches some 
 * condition. If it does, it returns the boolean true, else
 * it returns false
 */

// const some = parks.some(park => park.rating > 4);
// console.log(some);
//> true

const some = parks.some(park => park.name === "Grand Arches");
// console.log(some);
//> false

/**
 * THE EVERY METHOD
 * checks the same way as some except it returns true if every element
 * matches some condition
 */

const every = parks.every(park => park.rating > 4);
// console.log(every);
//> true

const everyElement = parks.every(park => {
    park.rating >= 4.2 && park.rating <= 4.6;
});

// console.log(`Last\n${everyElement}`);
//> false

/**
 * USING THESE METHODS WITH OBJECTS
 * you can use object.keys or object.values
 */

let parksObj = {
    Biscayne: 4.2,
    "Grand Canyon": 5,
    "Gateway Arch": 4.5,
    "Indiana Dunes": 4.1,
};

Object.keys(parksObj);
//> ["Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes"];

// the 'current' key is passed into the function as 'name' and parks[name]
// accesses the rating which is stored in 'rating'
// it returns the names that have a rating greater than 4.5
const keys = Object.keys(parksObj).filter(name => {
    const rating = parksObj[name];
    return rating >= 4.5;
});
// console.log(keys);