// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const fortune = "A friend is a present you give yourself.";

//     if (fortune) {
//       resolve(`Your fortune is: ${fortune}`);
//     } else {
//       reject(Error("No fortune"));
//     }
//   }, 2500);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e.message));

const promise = new Promise((resolve, reject) => {
  resolve("Completed!");
});

promise.then((result) => console.log(result));
