// object to practice functions with
const location = {
    name: "Arches",
    state: "Utah",
    rating: 4.3,
    geo: {
        lat: 38.68,
        lon: -109.57,
    },
};

// function isExcellent(park) {
//     console.log("This is a function declaration.");
//     return park.rating > 4 ? "Excellent!" : "Good";
// }

// console.log(isExcellent(location)); 
// "This is a function declaration.", "Excellent!"

/**
 * reference the same function still as a named function.
 * named function expression
 */
const getRatingAsWord = function isExcellent(park) {
    console.log("This is a function expression that has a name.");
    return park.rating > 4 ? "Excellent!" : "Good";
}

//console.log(getRatingAsWord(location)); 
// "This is a function expression that has a name.", "Excellent!"

/**
 * create an anonymous function inside of a reference variable
 * it has the same name as the function above, so now the
 * program will not run unless the declared named function 
 * is commented out
 */
const isExcellent = function(park) {
    console.log("This is an unnamed anonymous function.")
    return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(isExcellent(location));

/**
 * now to write a similar function to the ones above
 * this time as an ARROW FUNCTION
 * 
 * const getLocationState = (location) => {
 *      return location.state;
 * }
 * 
 * the function above can be written more concisely in a few ways
 * first, since there is only one parameter, the () are optional
 * 
 * const getLocationState = location => {
 *      return location.state;
 * }
 * 
 * next, since there is only one statement inside of the curly braces,
 * they are also optional and considered to be unnecessary, and we
 * can move the single funciton statement to the same line as the arrow
 * 
 * const getLocationState = location => return location.state;
 * 
 * lastly, since this is a function, and the syntax knows the function
 * is supposed to *return* something, and there is only one statement,
 * the return keyword is also optional and unnecessary, as the function
 * will return whatever single statement is behind the arrow
 * you should use () if the return statement is very long
 */

const getLocationState = location => location.state;
// console.log(getLocationState(location)); // 'Utah'

// a similar function in structure and return
const getLocationName = location => location.name;
// console.log(getLocationName(location)); // 'Arches'

/**
 * using () instead of {} since we are not using the return keyword
 * {return} can still be used
 */
const getGoogleMapURL = ({ geo: { lat, lon } }, zoom = 10) => (
    `https://www.google.com/maps/@${lat},${lon},${zoom}z`
);
console.log(getGoogleMapURL(location));