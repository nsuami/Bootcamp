const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/say/:greeting", (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;
  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
});

app.get("/say", (req, res) => res.send("default greeting"));

app.get("/hello", (req, res, next) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
});

app.get("/songs", (req, res) => {
  const title = req.query.title;
  res.send(title);
});

app.get("/", (req, res) => res.send("you are home"));

module.exports = app;
