const Category = require("../models/Category");
const Product = require("../models/Product");

//Get all Products

exports.getAllProducts = function(req, res) {
  Product.findAll({ include: [Category] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Products error: ", err);
      res.send(err);
    });
};

//Get Product by id

exports.getProduct = function(req, res) {
  Product.findByPk(req.params.id, { include: [Category] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Product error: ", err);
      res.send(err);
    });
};

//Add Product

exports.addProduct = function(req, res) {
  Product.create({
    name: req.body.name,
    CategoryId: req.body.CategoryId,
    inStock: req.body.inStock,
    description: req.body.description,
    unitMeasure: req.body.unitMeasure,
    img1Url: req.body.img1Url,
    img2Url: req.body.img2Url,
    img3Url: req.body.img3Url
  })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Product error: ", err);
      res.send(err);
    });
};

//Delete Product by id

exports.deleteProduct = function(req, res) {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Product error: ", err);
      res.send(err);
    });
};
