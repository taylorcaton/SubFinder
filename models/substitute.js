const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const substituteSchema = new Schema({
  name: { type: String, required: true },
  password: {type: String, required: true},
  phonenum: { type: String, required: true },
  date: {type: Date, default: Date.now}
});

const Substitute = mongoose.model("Substitute", substituteSchema);

module.exports = Substitute; 
