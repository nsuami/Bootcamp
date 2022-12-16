/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.


const array = [{
        name: "Slip Dress",
        priceInCents: 8800,
        availableSizes: [0, 2, 4, 6, 10, 12, 16],
        quantity: 0
    },
    {
        name: "Shoes",
        priceInCents: 8800,
        availableSizes: [0, 2, 4, 6, 10, 12, 16],
        quantity: 0
    },
    {
        name: "Hat",
        priceInCents: 8800,
        availableSizes: [0, 2, 4, 6, 10, 12, 16],
        quantity: 0
    },
    {
        name: "Socks",
        priceInCents: 8800,
        availableSizes: [0, 2, 4, 6, 10, 12, 16],
        quantity: 0
    },
    {
        name: "Pants",
        priceInCents: 8800,
        availableSizes: [0, 2, 4, 6, 10, 12, 16],
        quantity: 0
    },
]
*/

function printablePrice(priceInCents) {
    const amount = (priceInCents / 100).toFixed(2);
    return `$${amount}`;
}

//DONE
function chooseItemByNameAndSize(products, name, size) {
    if (!products) return null;
    for (let selected of products) {
        const { name: product, availableSizes } = selected;
        return product === name && availableSizes.includes(size) ? selected : null;
    }
}

//DONE
function addProductToCart({ name, priceInCents }, cart = {}) {
    // const selected = cart[name];
    cart[name] ? cart[name].quantity++ :
        cart[name] = { priceInCents, quantity: 1 };
    return cart;
}

function calculateTotal(cart) {
    let total = 0;
    for (let selected in cart) {
        const item = cart[selected];
        total += item.quantity * item.priceInCents;
    }
    return total;
}

function printReceipt(cart) {
    let message = ``;
    if (Object.keys(cart).length === 0) {
        message = null;
        return message;
    } 
    for (let selected in cart) {
        const item = cart[selected];
        const { priceInCents, quantity } = item;
        const price = printablePrice(quantity * priceInCents);
        // const price = printablePrice(itemSub);
        message += `${quantity}x${selected} - ${price}\n`;
        }

    const total = printablePrice(calculateTotal(cart));
    message += `Total: ${total}`;
    return message;
}





function printReceipt(cart) {

}


module.exports = {
    chooseItemByNameAndSize,
    addProductToCart,
    calculateTotal,
    printReceipt,
};