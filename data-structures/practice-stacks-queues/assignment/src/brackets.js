const Stack = require("./lib/stack");

function match(expression) {
  let leftStack = new Stack();
  let rightStack = new Stack();
  let leftPop = "";
  let rightPop = "";
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  // start a loop to iterate through each character in the expression
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(" || expression[i] === "[" || expression[i] === "{") {
      leftStack.push(expression[i]);
    } else if (
      expression[i] === ")" ||
      expression[i] === "]" ||
      expression[i] === "}"
    ) {
      rightStack.push(expression[i]);
      if (leftStack.top !== null && rightStack.top !== null) {
        leftPop = leftStack.pop();
        rightPop = rightStack.pop();
        console.log("leftpop", leftPop, "rightpop", brackets[leftPop]);
        if (rightPop !== brackets[leftPop]) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  if (leftStack.top === null) {
    return true;
  } else {
    return false;
  }
}

module.exports = match;

//   const stack = new Stack();
//   let valid;
//   for (let i = 0; i < expression.length; i++) {
//     const current = expression.charAt(i);
//     let open;
//     let close;
//     if (i === 0) {
//       valid = current;
//       if (valid === "(") {
//         valid += ")";
//       } else if (valid === "[") {
//         valid += "]";
//       } else if (valid === "{") {
//         valid += "}";
//       } else {
//         break;
//       }
//     } else {
//       open = valid.charAt(0);
//       close = valid.charAt(1);
//     }

//     if (current === open) {
//       stack.push(current);
//     } else if (stack.top) {
//       stack.pop();
//     } else {
//       return true;
//     }
//   }
//   return !stack.top === null;

// {}()[]
