
product structure
{
    name: "Pants",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
    quantity: 0
}


function addProductToCart({ name, priceInCents }, cart = {}) {
    const selected = cart[name];
    selected ? selected.quantity++ :
        cart[name] = { priceInCents, quantity: 1 };
    return cart;
}

 - cart is an object of string keys with objects as values
 - product is an object with normal key:value structure
 - we select the product by way of cart[name] (name is destructured from the product object, as is priceInCents) to check and see if the product exists in the cart.
 - if it does exist, raise the quantity by one with the increment operator
 - if it does not exist, we must create the object.
 - the easiest way to create this object ise by using "key[value]=" notation with object shorthand on the other side
 - the key we want to create in the cart object is a string, so bracket notation MUST be used.
 - using object shorthand, we can assign the key the value of an object with the keys priceInCents with its inherited value from product, and a new key: quantity, with a value of 1.

 
 function calculateTotal(cart) {
    let total = 0;
    for (let name in cart) {
        const item = cart[name];
        total += item.quantity * item.priceInCents;
    }
    return total;
}

 - uses a for/in loop. accesses each key by naming it "name" since they are strings
 - item var gives a short hand way of saying cart[name]
 - then we sum the total with the value of the quantity in each item multiplied by the price in each item