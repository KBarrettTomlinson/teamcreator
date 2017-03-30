// requires and globals
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// set up mongoose stuff
var GroupSchema = mongoose.Schema({
  groupsArray: Array,
});

var Groups = mongoose.model('Groups', GroupSchema);

// routes
router.get('/', function(req, res) {
  Groups.find(function(err, allGroups) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allGroups);
  });
});

router.post('/', function(req, res) {
  var group = new Groups();
  group.groupsArray = req.body.groupsArray; //check what this property is called in the object being passed in
  group.save(function(err, savedGroup) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(savedGroup);
  });
});

// exports
module.exports = router;
