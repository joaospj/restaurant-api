const Tab = require("../models/Tab");
const Table = require("../models/Table");

//Get all Tabs

exports.getAllTabs = function(req, res) {
  Tab.findAll({ include: [Table] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Tabs error: ", err);
      res.send(err);
    });
};

//Get Tab by id

exports.getTab = function(req, res) {
  Tab.findByPk(req.params.id, { include: [Table] })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get Tab error: ", err);
      res.send(err);
    });
};

//Add Tab

exports.addTab = function(req, res) {
  Tab.create({
    TableId: req.body.TableId
  })
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Add Tab error: ", err);
      res.send(err);
    });
};

//Delete Tab by id

exports.deleteTab = function(req, res) {
  Tab.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(resp => {
      res.sendStatus(200);
      //   console.log(resp);
    })
    .catch(err => {
      console.log("Delete Tab error: ", err);
      res.send(err);
    });
};
