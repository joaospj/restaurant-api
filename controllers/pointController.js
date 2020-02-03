const Point = require("../models/Point");

//Get all Points

exports.getAllPoints = function(req, res) {
  Point.findAll()
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Points error: ", err);
      res.send(err);
    });
};

//Get Point by id

exports.getPoint = function(req, res) {
  Point.findByPk(req.params.id)
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Point error: ", err);
      res.send(err);
    });
};

//Add Point

exports.addPoint = function(req, res) {
  const { name } = req.body;
  Point.create({ name })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Point error: ", err);
      res.send(err);
    });
};

//Delete Point by id

exports.deletePoint = function(req, res) {
  Point.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Point error: ", err);
      res.send(err);
    });
};
