const Table = require("../models/Table");

//Get all Points

exports.getAllTables = function(req, res) {
  Table.findAll()
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Tables error: ", err);
      res.send(err);
    });
};

//Get Table by id

exports.getTable = function(req, res) {
  Table.findByPk(req.params.id)
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Table error: ", err);
      res.send(err);
    });
};

//Add Table

exports.addTable = function(req, res) {
  Table.create({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    status: req.body.status,
    isActive: req.body.isActive
  })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Table error: ", err);
      res.send(err);
    });
};

//Delete Table by id

exports.deleteTable = function(req, res) {
  Table.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Table error: ", err);
      res.send(err);
    });
};
