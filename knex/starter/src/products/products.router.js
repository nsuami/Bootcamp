const router = require("express").Router({ mergeParams: true });
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
// using regex to make the id one or more digits only
router.route("/:productId([0-9]+)").get(controller.read).all(methodNotAllowed);

module.exports = router;
("");
