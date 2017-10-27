const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SubFinder", {
  useMongoClient: true
});

const subSeed = [
  {
    name: "Bill Brasky",
    password: "12345",
    phonenum: "919-362-7365",
    date: new Date(Date.now())
  },
  {
    name: "Norm MacDonald",
    password: "12345",
    phonenum: "919-362-7365",
    date: new Date(Date.now())
  }
];

db.Substitute
  .remove({})
  .then(() => db.Substitute.collection.insertMany(subSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const teacherSeed = [
  {
    name: "Taylor Caton",
    password: "12345",
    phonenum: "980-253-2643",
    date: new Date(Date.now())
  },
  {
    name: "Brandy Caton",
    password: "12345",
    phonenum: "704-502-9296",
    date: new Date(Date.now())
  }
];

db.Teacher
  .remove({})
  .then(() => db.Teacher.collection.insertMany(teacherSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const jobSeed = [
  {
    teacher: "Taylor Caton",
    sub: "",
    filled: false,
    absentDate: "",
    date: new Date(Date.now())
  },
  {
    teacher: "Brandy Caton",
    sub: "",
    filled: false,
    absentDate: "",
    date: new Date(Date.now())
  }
];

db.Jobs
  .remove({})
  .then(() => db.Jobs.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
