const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// TODO: return an array of users from /users in form of { data: Array }
app.get("/users", (req, res, next) => {
  return res.json({ data: users });
});

// TODO: return a single user by id from /users/:userId in form of { data: Object }
app.get("/users/:userId", (req, res, next) => {
  const id = parseInt(req.params.userId, 10);
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) return res.send(`User ID not found: ${id}`);
  res.json({ data: foundUser });
});

// TODO: return all states from /states in the form of { data: Array }

app.get("/states", (req, res, next) => {
  return res.json({ data: states });
});

// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.get("/states/:stateCode", (req, res) => {
  const stateCode = req.params.stateCode;
  const foundState = states[stateCode];
  if (!foundState) return res.send(`State code not found: ${stateCode}`);
  res.json({ data: { stateCode: stateCode, name: foundState } });
});
// TODO: add not found handler

app.use((req, res, next) => {
  res.send(`Not found: ${req.originalUrl}`);
});

// TODO: Add error handler

app.use((err, req, res, next) => {
  res.send(`An error occurred: ${err}`);
});
module.exports = app;
