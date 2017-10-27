const router = require("express").Router();
const substituteRoutes = require("./substitutes");
const jobRoutes = require("./jobs");

// substitute routes
router.use("/substitutes", substituteRoutes);

//job routes
router.use("/jobs", jobRoutes);

module.exports = router;