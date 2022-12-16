// express is imported
const express = require("express");
// morgan is imported
const morgan = require("morgan");
// instantiate express as app
const app = express();

// sends the response Hello!

// const logging = (req, res, next) => {
//   console.log("A request is being made!");
//   next();
// };
// app.use(logging);

// app uses the morgan object with the argument 'dev' that will make console output nice
app.use(morgan("dev"));
// app says hello!
const homeRes = (req, res, next) => res.send("You are home.");
app.get("/", homeRes);

const sayHello = (req, res, next) => {
  // app says hello
  res.send("Hello!");
};
app.get("/hello", sayHello);

app.get("/ping", (req, res, next) => {
  res.send("OK");
});
app.use((req, res, next) => {});
module.exports = app;
