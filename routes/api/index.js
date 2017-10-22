const router = require("express").Router();
const substituteRoutes = require("./substitutes");

// substitute routes
router.use("/substitutes", substituteRoutes);

module.exports = router;