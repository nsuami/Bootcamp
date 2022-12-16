const DISCOUNT_PERCENTAGE = 0.15; //scope is global
const products = [
    { name: "hat", priceInCents: 1200, inStock: true },
    { name: "shirt", priceInCents: 1800, inStock: true },
    { name: "pants", priceInCents: 2000, inStock: true },
]; // scope is global

function discountPricesInCents(products) { // scope is global
    // scope is in the function but can be returned with a call
    // in global scope
    const result = [];

    for (let i = 0; i < products.length; i++) {
        // scope is in the loop
        const product = products[i];
        let price = product.priceInCents;
        if (DISCOUNT_PERCENTAGE > 0) {
            //scope is in the if statement
            const multiplier = 1 - DISCOUNT_PERCENTAGE;
            price *= multiplier;
        }
        result.push(price);
    }

    return result;
}

console.log(discountPricesInCents(products));

// you can also have two different variables named the same
// if their scope is different, like in a conditional tree
// you can declare the same variable name with a different value
// that depends on the condition, called sibling scopes