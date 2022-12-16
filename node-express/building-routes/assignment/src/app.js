const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Build your routes here
app.get("/welcome", (req, res) => res.send("Welcome to my server."));
app.get("/ping", (req, res) => res.send("pong!"));
module.exports = app;
