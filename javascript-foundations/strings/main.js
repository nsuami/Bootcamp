// function to turn sentences into sentence case
// const sentenceCase = function(sentence) {
//     const firstCharacter = sentence[0]
//     let result = firstCharacter.toUpperCase()

//     for (let i = 1; i < sentence.length; i++) {
//         const character = sentence[i]
//         result += character.toLowerCase()
//     }

//     return result
// }

const sentenceCase = function(sentence) {
    // (index to start substr, number of characters to extract)
    // index = 0, numbers of characters = 1, so it takes just 
    const first = sentence.substr(0, 1)
    const rest = sentence.substr(1)

    return first.toUpperCase() + rest.toLowerCase()
}

const sentence = (
    "the once and future king"
)

console.log(sentenceCase(sentence)) // The once and future king

// capitalize the first letter of each individual word
const titleize = function(title) {
    // words separated by spaces are split into array indeces and stored in this array "words"
    const words = title.split(" ");
    // this is the array that will be filled with title case
    let result = [];

    for (let i = 0; i < words.length; i++) {
        // the current word is capitalized by sentence case (each word's first letter is index 0) and stored
        const capitalized = sentenceCase(words[i]);
        // the capitalized word is pushed to the end of the result array
        result.push(capitalized);
    }
    // the array is joined together as a string and the array indeces are separated by a space " "
    return result.join(" ");
}

console.log(titleize(sentenceCase(sentence))); // The Once And Future King

const title = "The once and future king";
const author = "T. H. White"
console.log(title.split("! ")); // [ 'Guards', 'Guards!' ]
console.log(title.split(" ")); // [ 'Guards!', 'Guards!' ]
console.log(title.split("Guards! ")); // [ '', 'Guards!' ]

const titleArr = ["The", "Light", "Fantastic"]; // The-Light-Fantastic
const arrTitle = titleArr.join("-");
console.log(arrTitle);
console.log(titleArr.join("_-_"));
console.log(titleArr.join());

const bookSale = function(title, priceInCents) {
    const price = (priceInCents / 100).toFixed(2);
    return `The price of '${titleize(title)}' by ${author} is $${price}.`;
}

console.log(bookSale(title, 1055));