const db = require("../models");

// Defining methods for the JobsController
module.exports = {
  findAll: function(req, res) {
    console.log(`FINDALL JOBS CALLED`);
    db.Jobs
      .find({})
      .sort({ absentDate: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log(req.params.name); 
    db.Jobs
      .find({name: req.params.name})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(`FINDBYID CALLED: Looking for ${req.body.userName}`);
    db.Jobs
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(`CREATE CALLED`);
    console.log(req.body);
    db.Jobs
      .create({teacher: req.body.userName, absentDate: req.body.date})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, {$set: {sub: req.params.subName, filled: true}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  reset: function(req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, {$set: {sub: '', filled: false}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Jobs
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
