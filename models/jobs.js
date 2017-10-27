const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  teacher: { type: String, required: true },
  sub: {type: String, required: true},
  filled: {type: Boolean, default: false},
  absentDate: { type: Date, default: Date.now },
  date: {type: Date, default: Date.now}
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs; 
