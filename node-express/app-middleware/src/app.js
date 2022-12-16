const express = require("express");
// morgan is imported
const morgan = require("morgan");
// instantiate express as app
const app = express();

// sends the response Hello!
const sayHello = (req, res, next) => {
  // app says hello
  res.send("Hello!");
};
// const logging = (req, res, next) => {
//   console.log("A request is being made!");
//   next();
// };
// app.use(logging);

// app uses the morgan object with the argument 'dev' that will make console output nice
app.use(morgan("dev"));
// app says hello!
app.use(sayHello);

module.exports = app;
