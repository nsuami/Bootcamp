// an object of objects 
const people = {
    "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
    "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
    "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
};

// access the values of the object people, which will return 3 objects in an array
const addresses = Object.values(people);
//> [
//>   { address: "913 Hunts Lane", isCustomer: true },
//>   { address: "392 Norfolk Street", isCustomer: false },
//>   { address: "934 Engert Avenue", isCustomer: false },
//> ]

// for (let i = 0; i < addresses.length; i++) {
//     console.log(addresses[i]);
// }

// access the keys of the object people, which will return an array of strings 
const names = Object.keys(people);
//> [ "Lee Finch", "Whitney Shawna", "Gabrielle Mayo" ];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// this will run as many times as there are keys in the object
// 'name' is just a label to represent the keys in the object
for (let name in people) {
    // bracket notation used below because people[name] is actually a string with a variable name
    // in its place. If there were no variable name, bracket notation would still need to be used
    const person = people[name];
    // here the value is accessed using the syntax object.key. people is an OBJECT of OBJECTS,
    // so each key in people actually has multiple keys and their values attached to it
    const address = person.address;
    // using template literals with `` to access and print the information stored in the new vars
    console.log(`Sending mail to ${name} at ${address}.`)
}