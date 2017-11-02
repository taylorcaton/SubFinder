const router = require("express").Router();
const substitutesController = require("../../controllers/substitutesController");

// Matches with "/api/substitutes"
router
  .route("/")
  .get(substitutesController.findAll)
  .post(substitutesController.create);

// Matches with "/api/substitutes"
router
  .route("/login/:name")
  .post(substitutesController.findOne)

// Matches with "/api/substitutes/:id"
router
  .route("/:id")
  .get(substitutesController.findById)
  .put(substitutesController.update)
  .delete(substitutesController.remove);

module.exports = router;
