const Category = require("../models/Category");
const Point = require("../models/Point");

//Get all Categories

exports.getAllCategories = function(req, res) {
  Category.findAll({ include: [Point] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Categories error: ", err);
      res.send(err);
    });
};

//Get Category by id

exports.getCategory = function(req, res) {
  Category.findByPk(req.params.id, { include: [Point] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Category error: ", err);
      res.send(err);
    });
};

//Add Category

exports.addCategory = function(req, res) {
  Category.create({
    name: req.body.name,
    PointId: req.body.PointId,
    idParent: req.body.idParent,
    iconUrl: req.body.iconUrl
  })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Category error: ", err);
      res.send(err);
    });
};

//Delete Category by id

exports.deleteCategory = function(req, res) {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Category error: ", err);
      res.send(err);
    });
};
