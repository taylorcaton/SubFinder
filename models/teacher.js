const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  password: {type: String, required: true},
  phonenum: { type: String, required: true },
  date: {type: Date, default: Date.now}
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher; 
