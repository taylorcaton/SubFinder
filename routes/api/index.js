const router = require("express").Router();
const substituteRoutes = require("./substitutes");
const jobRoutes = require("./jobs");
const teacherRoutes = require("./teachers");
const twilioRoutes = require("./twilio");

// substitute routes
router.use("/substitutes", substituteRoutes);

//job routes
router.use("/jobs", jobRoutes);

//teacher routes
router.use("/teachers", teacherRoutes);

//teacher routes
router.use("/twilio", twilioRoutes);

module.exports = router;