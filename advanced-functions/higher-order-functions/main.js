/**
 * a higher order function is a function that either accepts a function as
 * one of its incoming arguments or returns a function
 *
 *
 * anonymous discount function
 * const discountedPrice = (price, discount) => price * discount;
 *
 * const finalPriceBed = discountedPrice(200, 0.9);
 * const finalPricePillow = discountedPrice(52, 0.9);
 * const finalPriceCurtain = discountedPrice(32, 0.9);
 * 
 * here is a higher order function similar to the regular function above
 * this function receives a discount as a single parameter, and returns
 * ANOTHER FUNCTION with the parameter of price that 
 */

// this is essentially a FUNCTION GENERATOR
const discountedPrice = (discount) => (price) => price * discount;
console.log(discountedPrice(.9)); // [Function (anonymous)]

/**
 * this GENERATES an anonymous unnamed function that can be referenced
 * with the reference variable tenPercentDiscount
 */
// generate a function referenced with tenPercentDiscount
const tenPercentDiscount = discountedPrice(0.9);
// run the function with the price of 200 and assign it to a variable
let finalPriceBed = tenPercentDiscount(200);
// log the current finalPriceBed
console.log(`The bed with 10% off is $${finalPriceBed}.`);
// generate a function referenced with twentyFivePercentDiscount
const twentyFivePercentDiscount = discountedPrice(0.75);
// run the 25% function with the price of 200 and reassign the variable
finalPriceBed = twentyFivePercentDiscount(200);
// log some stuff to show us what we did
console.log(`The bed with 25% off is $${finalPriceBed}.`);
console.log(tenPercentDiscount, twentyFivePercentDiscount);
// [Function (anonymous)] [Function (anonymous)]
// the function generates ANONYMOUS FUNCTIONS, meaning they have no
// explicit name and are referenced with a reference variable.

// THE FOR EACH METHOD

// array of objects 'parks'
let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
];

// to loop through this array, you might write a loop like this
for (let i = 0; i < parks.length; i++) {
    console.log(parks[i].name);
}

/**
 * "Because you are doing the same thing to each element of the array, 
 * you can write a function to perform that same task with each element. 
 * Then you can call that function repeatedly in the loop." 
 */

const logPark = park => console.log(park.name);
for (let i = 0; i < parks.length; i++) {
    // runs the function ONCE FOR EACH iteration of i to access objects
    logPark(parks[i]);
}

/**
 * you can think of this for loop as applying the function to 
 * each element of the array, one at a time.
 * 
 * THE FOR EACH METHOD lets you do this without a for loop
 * (hence the reason for the syntax that seemed over complicated is 
 * actually less complicated than writing a billion for loops each
 * time you need one)
 */

// array.forEachInThisArray(run this function)
// parks.forEach(logPark);

/**
 * the FOR EACH METHOD is a HIGHER ORDER FUNCTION
 * IT TAKES A CALL BACK FUNCTION AS ITS ARGUMENT, IT DOES NOT
 * RETURN A FUNCTION HOWEVER, UNLESS THE RETURN OF THAT FUNCTION IT
 * CALLS BACK IS A FUNCTION!!!! (mind blown)
 */

// array.forEachInThisArray(run this function)
// element, index, collectionv are all variables that the forEach method
// retrieves from the array that the method is called with
parks.forEach((element, index, collection) => {
    console.log(`(${index + 1}/${collection.length}) ${element.name}`)
});

/**
 * In the above example, you can see that you have access to the 
 * individual element at each point in the array, the index at 
 * that point, and then the entire collection.
 */