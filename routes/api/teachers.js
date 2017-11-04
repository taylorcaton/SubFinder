const router = require("express").Router();
const teachersController = require("../../controllers/teachersController");

// Matches with "/api/teachers"
router
  .route("/")
  .get(teachersController.findAll)
  .post(teachersController.create);

// Matches with "/api/teachers/login/:name"
router
  .route("/login/:name")
  .post(teachersController.findOne)

// Matches with "/api/teachers/:id"
router
  .route("/:id")
  .get(teachersController.findById)
  .put(teachersController.update)
  .delete(teachersController.remove);

module.exports = router;
