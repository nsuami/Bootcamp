const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

app.get("/zoos/all", (req, res, next) => {
  const isAdmin = req.query.admin;
  // const isBoolean = (param) =>
  //   param == "true" ? true : param == "false" ? false : param;

  console.log(typeof isAdmin);
  const zoos = getZoos();

  isAdmin === "true"
    ? res.send(`All zoos: ${zoos.join("; ")}`)
    : next("You do not have access to that route.");
});

app.get("/check/:zip", validateZip, (req, res) => {
  const zip = req.params.zip;
  const response = getZoos(zip);

  if (response) {
    res.send(`${zip} exists in our records.`);
  } else {
    res.send(`${zip} does not exist in our records.`);
  }
});

app.get("/zoos/:zip", validateZip, (req, res) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip);

  if (zoos) {
    res.send(`${zip} zoos: ${zoos.join("; ")}`);
  } else {
    res.send(`${zip} has no zoos.`);
  }
});

app.use((req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});

/**
 * /zoos/all, () => {}
 * /zoos/:foo, foo = zipcode foo = name
 */

module.exports = app;
