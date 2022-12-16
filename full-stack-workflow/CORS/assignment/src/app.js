const express = require("express");
const app = express();

const plantsRouter = require("./plants/plants.router");
const usersRouter = require("./users/users.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const cors = require("cors");

app.use(express.json());

app.use("/plants", cors(), plantsRouter);
app.use("/users", usersRouter);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
