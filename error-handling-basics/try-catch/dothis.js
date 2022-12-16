function tryCatch() {
  // try this and see if there is an error
  try {
    //         name(message)
    throw new Error("Something went wrong");
    // if there are, 'catch' them and continue the program
  } catch (error) {
    // 'error' is an object with two keys: name and message. name is the 'Error' word
    // above. message is the message that goes inside of the () onside of name "Error".
    // message above is "Something went wrong"
    console.log(`We handled the error: ${error}`);
    console.log(`We handled the error: ${error.name}: ${error.message}`);
  }
}

// tryCatch();

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  const min = 10;
  try {
    if (randomNumber < min) {
      throw `Random number is too small! ${randomNumber} is less than ${min}.`;
    } else {
      console.log(`The random number is: ${randomNumber}`);
    }
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}

getRandomNumber();

function throwArr() {
  try {
    // throw an array of strings. this array is the error
    throw ["one", "two", "three"];
  } catch (error) {
    // join the array together into a string
    console.log(error); //> [ 'one', 'two', 'three' ]
    console.log(`${error.name}: ${error.message}`); //> undefined: undefined
    const errors = error.join(", ");
    console.log(`Multiple errors: ${errors}`); //> Multiple errors: one, two, three
  }
}

throwArr();
