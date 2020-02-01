const Size = require("../models/Size");
const Product = require("../models/Product");

//Get all Sizes

exports.getAllSizes = function(req, res) {
  Size.findAll({ include: [Product] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Sizes error: ", err);
      res.send(err);
    });
};

//Get Size by id

exports.getSize = function(req, res) {
  Size.findByPk(req.params.id, { include: [Product] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Size error: ", err);
      res.send(err);
    });
};

//Add Size

exports.addSize = function(req, res) {
  Size.create({
    name: req.body.name,
    price: req.body.price,
    default: req.body.default,
    ProductId: req.body.ProductId
  })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Size error: ", err);
      res.send(err);
    });
};

//Delete Size by id

exports.deleteSize = function(req, res) {
  Size.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Size error: ", err);
      res.send(err);
    });
};
