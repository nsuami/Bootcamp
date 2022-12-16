const router = require("express").Router();
const controller = require("./notes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const ratingsRouter = require("./ratings/ratings.router");

//> controller.noteExists is not a function
router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);
router.use("/:noteId/ratings", controller.noteExists, ratingsRouter);
router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
