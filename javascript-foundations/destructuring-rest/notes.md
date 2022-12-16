destructuring objects into variables: refer to main.js
 - destructuring assignment creates variables out of object keys {}
 - you can nest assignments just like how you can nest objects

destructuring arrays:
 - you can destructure arrays with []
 - first, second, third will pull the first, second, or third items (indeces 0,1,2) into variables called those names
 - rest operator ...
    - puts the rest of the array into another ray using this operator ... with a variable name after.
    - example: [first, ...otherGenres]

destructuring in the function's parameters:
 - if you set the functions parameters with the destructuring assignment, you can automatically create those variables from the keys when the function is called with an object.
 - example:
   - function print({ author, title })
   print(product) // creates author and title variables with whatever is in those keys and gives you access to use or manipulate them within the scope of the function