const Tab = require("../models/Tab");

//Get all Tabs

exports.getAllTabs = function(req, res) {
  Tab.findAll()
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.log("Get all Tab error: ", err);
      res.send(err);
    });
};

//Get Tab by id

exports.getTab = function(req, res) {
  Tab.findByPk(req.params.id)
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
  Tab.create()
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
