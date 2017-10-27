const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/jobs"
router
  .route("/")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with "/api/substitutes"
router
  .route("/login/:name")
  .post(jobsController.findOne)

// Matches with "/api/substitutes/:id"
// router
//   .route("/:id")
//   .get(substitutesController.findById)
//   .put(substitutesController.update)
//   .delete(substitutesController.remove);

module.exports = router;
