const router = require("express").Router();
const substituteRoutes = require("./substitutes");
const jobRoutes = require("./jobs");
const teacherRoutes = require("./teachers");

// substitute routes
router.use("/substitutes", substituteRoutes);

//job routes
router.use("/jobs", jobRoutes);

//teacher routes
router.use("/teachers", teacherRoutes);

module.exports = router;