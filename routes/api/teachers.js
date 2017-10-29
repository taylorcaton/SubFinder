const router = require("express").Router();
const teachersController = require("../../controllers/teachersController");

// Matches with "/api/teachers"
router
  .route("/")
  .get(teachersController.findAll)
  .post(teachersController.create);

// Matches with "/api/teachers"
router
  .route("/login/:name")
  .post(teachersController.findOne)

// Matches with "/api/substitutes/:id"
// router
//   .route("/:id")
//   .get(substitutesController.findById)
//   .put(substitutesController.update)
//   .delete(substitutesController.remove);

module.exports = router;
