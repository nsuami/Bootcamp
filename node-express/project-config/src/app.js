// require the express package and assign it to a variable
const express = require("express");
// the express package exports a function. when you invoke the function, you get
// a new express app and assign it to 'app'
const app = express();

//the express app is exported to be used in the server.js file
module.exports = app;
