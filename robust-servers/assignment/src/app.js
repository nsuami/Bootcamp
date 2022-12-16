const express = require("express");
const app = express();
const urlsRouter = require("./urls/urls.router");
const usesRouter = require("./uses/uses.router");

app.use(express.json());

// URLS
app.use("/urls", urlsRouter);

// USES
app.use("/uses", usesRouter);

// HOME
// app.use("/", (req, res) => res.send("You are home congrats fuckface"));

// NOT FOUND
app.use((req, res, next) => {
  return next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// ERROR HANDLER
app.use((error, req, res, next) => {
  console.log(error);
  const { status = 500, message = "Something is *really* wrong..." } = error;
  res.status(status).json({ error: `${status} ${message}` });
});

module.exports = app;
