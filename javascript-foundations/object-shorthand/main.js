/**
 * @author Austin Jones <austin@austinjones.io>
 */

// object shorthand
const title = "Infernal Devices";
const author = "K.W. Jeter";

// { 
//   includes variables to make keys of the same name and assign them 
//   the coordinating values, all inside a new object
// }
const book = { title, author };
console.log(book);
// { title: 'Infernal Devices', author: 'K.W. Jeter' }

// here another object is created. this time, there is another object inside
// of the new object.
const product = { book, priceInCents: 1950 }
console.log(product);
// {
//   book: { title: 'Infernal Devices', author: 'K.W. Jeter' },
//   priceInCents: 1950
// }

// the spread operator 
const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];
// before, to combine these arrays, we may have used a for loop to push each index of 
// one of these arrays to the end of the other one in order to combine them
/* like this

for (let i = 0; i < arrOne.length; i++) {
    arrTwo.push(arrOne[i]);
}

or we may have used the concat() method
but now we can use the spread operator 
*/
const allBooks = [...ownedBooks, ...wishlist];
// when ... is used with an existing array on the right-hand side of the = sign
// it will expand the entries inside of that array. here, both entries are expanded
// into a new array, so that all of the array elements appear next to each other

// we can do the same with objects 

const salesTax = { state: "Washington", tax: 0.065 };
const sale = {...product, ...salesTax };
console.log(sale);
/*
  {
    book: {
      title: "Infernal Devices",
      author: "K.W. Jeter",
    },
    priceInCents: 1950,
    state: "Washington",a
    tax: 0.065
  };

  notice how book is not expanded. the spread operator only expands one level deep
*/

const wrongSale = { product, sale };
console.log(wrongSale);
/*
{
  product: {
    book: { title: 'Infernal Devices', author: 'K.W. Jeter' },
    priceInCents: 1950
  },
  sale: {
    book: { title: 'Infernal Devices', author: 'K.W. Jeter' },
    priceInCents: 1950,
    state: 'Washington',
    tax: 0.065
  }
}

note how product and sale are made keys in wrongSale. The object shorthand doesn't
take the keys from both objects and simply place them into a new object like the 
spread operator does.

you can also overwrite keys in an object where you're using shorthand.
*/

const newSale = {
    ...product,
    ...salesTax,
    priceInCents: product.priceInCents * (1 + salesTax.tax),
};

console.log(newSale);