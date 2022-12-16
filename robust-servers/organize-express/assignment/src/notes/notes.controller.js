const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

/**
 * CRUD
 */

function list(req, res) {
  res.json({ data: notes });
}

function create(req, res, next) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: ++lastNoteId, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

function read(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
}

function update(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((selected) => selected.id === noteId);
  const { data } = req.body;
  foundNote.text = data.text;
  res.json({ data: foundNote });
}

function destroy(req, res, next) {
  const { noteId } = req.params;
  const indexToDelete = notes.findIndex((note) => note.id === Number(noteId));
  notes.splice(indexToDelete, 1);
  res.sendStatus(204);
}

/**
 * MIDDLEWARE
 */

function noteExists(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    // empty call - is just going to the next one no matter what it is
    return next();
  } else {
    return next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
}

function hasText(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  return next({ status: 400, message: "A 'text' property is required." });
}
// exports include middleware before the final method response
module.exports = {
  list,
  // 1 hasText, 2 create
  create: [hasText, create],
  read: [noteExists, read],
  // 1 is shit is fucked up? // 2 is shit fucked up here? no
  //3 update >> send it to the database >> response to the browser/user
  update: [noteExists, hasText, update],
  destroy: [noteExists, destroy],
};
