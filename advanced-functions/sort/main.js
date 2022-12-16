const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
];
console.log(parks);
/**
 *> [
  { name: 'Biscayne', rating: 4.2 },
  { name: 'Grand Canyon', rating: 5 },
  { name: 'Gateway Arch', rating: 4.5 },
  { name: 'Indiana Dunes', rating: 4.1 }
]
 */

/**
 * parkA is the park at index 0, parkB is the park at index 1 on the
 * first iteration. the two variables crawl to the end of the array one
 * at a time. O, 1 for first iteration, 1, 2 for second iteration,
 * and so on
 * if parkA.rating is greater than parkB.rating, it returns 1
 * if the number returned is positive, parkA will be moved after parkB.
 * if parkA.rating is not greeater than parkB.rating, -1 is returned
 * a negative number return will move parkA before parkB
 */
parks.sort((parkA, parkB) => parkA.rating > parkB.rating ? 1 : -1);
console.log(parks);
/**
 *> [
  { name: 'Indiana Dunes', rating: 4.1 },
  { name: 'Biscayne', rating: 4.2 },
  { name: 'Gateway Arch', rating: 4.5 },
  { name: 'Grand Canyon', rating: 5 }
]
 */

// comparing strings to sort
"Biscayne" < "Grand Canyon"; //> true
/**
 * this returns true because the letter B comes before the letter G
 * but it's not actually this simple
 */
"biscayne" < "Grand Canyon"; //> false
/**
 * strings are not compared alphabetically, they are compared based
 * on their character values. with some ingenuity, you can still sort
 * strings passably this way. like by changing all letters to one case
 */

parks.sort((parkA, parkB) =>
    parkA.name.toLowerCase() > parkB.name.toLowerCase() ? 1 : -1
);
console.log(parks);
/**
 *> [
  { name: 'Biscayne', rating: 4.2 },
  { name: 'Gateway Arch', rating: 4.5 },
  { name: 'Grand Canyon', rating: 5 },
  { name: 'Indiana Dunes', rating: 4.1 }
]
 */

/**
 * CAVEATS FOR SORT()
 * it expects you to return a negative number for items that should be 
 * earlier in the list and a positive number for items that should be
 * later in the list
 * sort does not return a new array, it changes or mutates the array in
 * place
 * it has a default behavior if you dont pass in a function, but this
 * default behavior might not be what you want
 */

console.log(["Biscayne", "grand canyon", "Gateway arch"].sort());
//> [ 'Biscayne', 'Gateway arch', 'grand canyon' ]

/**
 * it is almost always better to provide a function so that you
 * can determine the effect of sort()
 */