const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Route
app.get("/send/:message", (req, res, next) => {
  const message = req.params.message;
  if (message.length < 3) return next("Your message is too short!");
  res.send(`Your message: ${message}`);
});

// Error handling

app.use((req, res) => next("Could not find route."));

app.use((error, req, res, next) => {
  console.error(error);
  res.send(`An error occurred: ${error}`);
});

// Not Found

module.exports = app;
