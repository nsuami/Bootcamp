const express = require("express");
const app = express();
app.use(express.json());

const notes = require("./data/notes-data");

app.get("/notes/:noteId", (req, res, next) => {
  const noteId = parseInt(req.params.noteId, 10);
  const foundNote = notes.find((note) => note.id === noteId);

  if (!foundNote) {
    return next({ status: 404, message: `Note id not found: ${req.params.noteId}` });
    // res.status(404);
    // return next(`Note id not found: ${req.params.noteId}`);
  }
  res.json({ data: foundNote });
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// TODO: Add ability to create a new note
app.post("/notes", (req, res, next) => {
  const { data } = req.body;
  if (!data || !data.text) {
    return next({ status: 400, message: "Please send text kthx" });
  }

  const post = {};
  post.id = notes.length + 1;
  post.text = data.text;
  res.status(201).json({ data: post });
});

// TODO: add not found handler
app.use((req, res, next) => res.status(404).send(`Not found: ${req.originalUrl}`));

// TODO: Add error handler
app.use((err, req, res, next) => {
  const { status = 400, message = "Something went wrong!" } = err;
  res.status(status).send(message);
});

module.exports = app;
