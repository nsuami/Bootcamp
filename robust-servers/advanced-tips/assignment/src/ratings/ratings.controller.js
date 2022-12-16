const path = require("path");
const ratings = require(path.resolve("src/data/ratings-data"));

function ratingExists(req, res, next) {
  const ratingId = Number(req.params.ratingId);
  const foundRating = ratings.find((rating) => rating.id === ratingId);
  if (!foundRating) {
    return next({ status: 404, message: `Rating id not found: ${ratingId}` });
  }
  res.locals.rating = foundRating;
  return next();
}

function list(req, res, next) {
  const noteId = res.locals.note.id;
  const filteredRatings = ratings.filter((rating) => rating.noteId === noteId);
  return res.json({ data: filteredRatings });
}

function read(req, res, next) {
  console.log(res.locals.note);
  return res.json({ data: res.locals.rating });
}

module.exports = {
  list,
  read: [ratingExists, read],
  ratingExists,
};
