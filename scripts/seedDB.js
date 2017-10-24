const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/SubFinder",
  {
    useMongoClient: true
  }
);

const subSeed = [
  {
    name: "Bill Brasky",
    password: "12345",
    phonenum:'919-362-7365',
    date: new Date(Date.now())
  },
  {
    name: "Norm MacDonald",
    password: "12345",
    phonenum:'919-362-7365',
    date: new Date(Date.now())
  },

];

db.Substitute
  .remove({})
  .then(() => db.Substitute.collection.insertMany(subSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
