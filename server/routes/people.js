// requires and globals
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// set up mongoose stuff
var PersonSchema = mongoose.Schema({
  person: String,
});

var People = mongoose.model('People', PersonSchema);

// routes
router.get('/', function(req, res) {
  People.find(function(err, allPeople) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allPeople);
  });
});

// exports
module.exports = router;
