// primitive data types
// strings
const str = "words";
let myVar;
// numbers
const num = 25;
// boolean: true or false
const bool = true;
// undefined
const divideByZero = undefined;
// null or empty
const nothing = null;

let title = "Mort";
const name = title;
title = "Equal Rites";
// console.log(title, name); "Equal Rites", "Mort"
// name stores the value of title at that time in the program, and it does not update if title does
// this property of programming is used to create temporary vars and copies
// THIS IS A PROPERTY OF PRIMITIVE DATA TYPES

// reference data types
// functions
const method = function(arguments) {};
// objects
const person = {
    name: "John Smith",
    age: 30,
};
// arrays
const list = [1, 2, 3];
/**
 * When one of these data types is assigned to a variable, the variable will contain a reference,
 * also called a pointer, to the data type.
 */

// what will happen when the log is executed
const book = { title: "Mort", author: "Terry Pratchett" };
const mort = book;
book.price = 789;
// console.log(mort); //> { title: "Mort", author: "Terry Pratchett", price: 789 }
/**
 * since mort REFERENCES book, if book is updated, mort is updated too. mort simply POINTS to
 * book and it POINTS to what is CURRENTLY GOING ON with book
 */


const author = {};
const novel = {};
// console.log(author === book); //false

/**
 * author and novel are two different objects and their data is stored in two different 
 * places so the references to them to equal each other in the above conditional evaluation
 * returns false
 */
const books = ["Mort", "Sourcery", "Equal Rites"];
const series = books;
console.log(series);
console.log(books);
series.push("Guards! Guards!");
console.log(series);
console.log(books);

/**
 * since books is a reference data type, and series is assigned to books, they both
 * point to the same location in memory, and both are updated if the one or the other is.
 * HERE, books is mutated by series.push()
 * ULTIMATELY, CONST ONLY STOPS REASSIGNMENT, WITHOUT CHANGING THE VALEUS INSIDE OF THE
 * REFERENCE ITSELF (ARRAY OR OBJECT);
 */