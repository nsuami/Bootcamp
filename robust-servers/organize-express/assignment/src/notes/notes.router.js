const router = require("express").Router();
const controller = require("./notes.controller");

// possible methods for noteid

// notes/:noteId
router
  // /:noteId/foo
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

// possible methods for /
// /notes
router.route("/").get(controller.list).post(controller.create);

module.exports = router;
