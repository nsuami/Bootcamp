const router = require("express").Router();
const controller = require("./urls.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const usesRouter = require("../uses/uses.router");

router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);
router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);
router.use("/:urlId/uses", controller.urlExists, usesRouter);

module.exports = router;
