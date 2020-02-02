const Order = require("../models/Order");
const Tab = require("../models/Tab");
const Size = require("../models/Size");

//Get all Orders

exports.getAllOrders = function(req, res) {
  Order.findAll({ include: [Tab, Size] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Orders error: ", err);
      res.send(err);
    });
};

//Get Order by id

exports.getOrder = function(req, res) {
  Order.findByPk(req.params.id, { include: [Tab, Size] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Order error: ", err);
      res.send(err);
    });
};

//Add Order

exports.addOrder = function(req, res) {
  Order.create({
    TabId: req.body.TabId,
    SizeId: req.body.SizeId
  })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Order error: ", err);
      res.send(err);
    });
};

//Delete Order by id

exports.deleteOrder = function(req, res) {
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Order error: ", err);
      res.send(err);
    });
};
