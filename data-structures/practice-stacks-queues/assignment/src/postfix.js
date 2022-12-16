const Stack = require("./lib/stack");

function evaluate(expression) {
  const stack = new Stack();
  // 2 3 +

  //   console.log(stack);
  //   console.log(expression);
  expression = expression.replace(/\s+/g, "");
  // 23+
  //   console.log(expression);
  //   console.log(expression.includes(" "));
  Array.from(expression).forEach((c) => {
    if (isNaN(c)) {
      const op1 = stack.pop();
      const op2 = stack.pop(); // b        a
      const evaluated = eval(`${op2}${c}${op1}`);
      stack.push(evaluated);
    } else {
      stack.push(c);
    }
  });
  return stack.top.value;
}

module.exports = evaluate;
