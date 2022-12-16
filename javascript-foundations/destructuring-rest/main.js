const product = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
        firstName: "Philip",
        surname: "Pullman",
    },
};

function printAuthorByTitle(product) {
    // syntax before destructuring
    // const author = product.author;
    // const title = product.title;
    // syntax after destructuring 
    // this creates two new const variables
    // they are named for the keys because that is how
    // the destructure assignment finds the keys and creates
    // the variables 
    // { key names to make variables } = object
    // const { author, title } = product;
    // return `${title} by ${author.firstName} ${author.surname}`;
    // you can destructure multiple levels of an object
    const {
        author: { firstName, surname },
        title,
    } = product;
    return `${title} by ${firstName} ${surname}`;
}

// console.log(printAuthorByTitle(product));

// const author = {
//     name: {
//         first: "Phillip",
//         last: "Pullman",
//     },
//     birthday: "1946-10-19",
// }

// const {
//     name: { first, last },
//     birthday,
// } = author;

// console.log(`${last}, ${first}\nDOB: ${birthday}`);

// destructuring arrays

const genres = [
    "Fantasy",
    "Fiction",
    "Nonfiction",
    "Science Fiction",
    "Young Adult",
];

// destructure 
// const [ first, second ] = genres; // 'Fantasy', 'Fiction'
// ... is called the rest operator
const [first, second, ...otherGenres] = genres;

// console.log(first);
// console.log(second);
// console.log(otherGenres);

// destructuring in functions
function printAuthorAndTitle({ author, title }) {
    return `${title} by ${author.firstName} ${author.surname}`;
}

console.log(printAuthorAndTitle(product));