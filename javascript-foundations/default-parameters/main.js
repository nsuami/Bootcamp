/** 
 * you can set a default value for a parameter to autoformat funky return values 
 * of a function if the function were to be called without the correct amount of
 * arguments
 * 
 * 
 * if the function is called with no argument, 0 will be the default argument
 * function calculatePriceInDollars(priceInCents = 0) {
 *     return priceInCents / 100;
 * }
 * 
 * console.log(calculatePriceInDollars());
 * 
 * function welcomeMessage(name, isReturnCustomer = false) {
 *     const message = isReturnCustomer ? "Welcome back" : "Welcome";
 *     return `${message}, ${name}!`;
 * }
 * 
 * since true is passed, the return message will change
 * console.log(welcomeMessage("Austin", true));     Welcome back, Austin!
 * console.log(welcomeMessage("Austin"));   Welcome, Austin!
 * 
 * Function definition
 * destructuring the options object into two variables 
 * if we set { discount percentage, salesTax } = {}, then the function is called with no second 
 * argument to represent the two vars discountPercentage and salesTax, they will both be assigned
 * the undefined value
 * 
 * 
 * "If there is no object passed in as the second argument, the code will default to an object.
 * Then it will attempt to destructure that empty object. The variables will exist, but they 
 * will both be set to undefined." from thinkful section text 
 * 
 * 
 * function calculateTotal(products, { discountPercentage, salesTax } = {}) {
 * function calculateTotal(products, { discountPercentage, salesTax = 0.0825 } = {}) {
 * default discount set to 0 because there may not always be a discount (this part isn't
 * necessary), salesTax set to 0.0825 because it is assumed the salesTax is usually that amount
 */

function calculateTotal(products = [], { discountPercentage = 0, salesTax = 0.0825 } = {}) {
    let result = 0;
    for (let i = 0; i < products.length; i++) {
        // destructuring products at index of i into two variables
        const { priceInCents, quantity } = products[i];
        result += priceInCents * quantity;
    }
    console.log(`Result after for loop is ${result}`);
    /**
     * This if statement checks to see if the variable has a value that IS NOT:
     * false, undefined, null, NaN, an empty string, or 0. If the variable has a value that
     * is not these things, it will run the conditional code
     */
    if (discountPercentage) result *= 1 - discountPercentage;
    console.log(discountPercentage);
    console.log(`Result after if statement is ${result}`);
    /** 
     * if the salesTax is undefined because of a wonky function call without enough arguments
     * then the result will be NaN (not a real number) because the operation is still carried out
     * it is not confitional like the one above it
     */
    return result * (1 + salesTax);

}

// Inputs array of 2 objects accessed with i = 0,1 
const products = [{
        name: "Black Longline T-Shirt",
        priceInCents: 1500,
        size: "M",
        quantity: 2,
    },
    {
        name: "Light Wash Stretch Skinny Jeans",
        priceInCents: 6000,
        size: 32,
        quantity: 1,
    },
];
const options = { discountPercentage: 0.1, salesTax: 0.0825 };

// Function call
let result = calculateTotal(products, options); //> 8768.25
console.log(`Result after function call is ${result}`);