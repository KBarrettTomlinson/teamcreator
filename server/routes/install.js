var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var PersonSchema = mongoose.Schema({
  name : String
});

var People = mongoose.model("People", PersonSchema);

var chiYaks = ["Anna", "Betsy", "Chris", "Craig", "Dan", "Emily", "Erin","Keith", "Kevin", "Lisa", "Logan", "Olga", "Y Paul", "Teigen", "Claudia", "Nic", "Anisa", "Briana"];

function addPeopleToDatabase(array) {
  for (var i = 0; i < chiYaks.length; i++) {
    savePerson(chiYaks[i]);
  }
}

function savePerson(name) {
  var person = new People();
  person.name = name;
  person.save(function(err, savedPerson) {
    if(err){
      console.log(err);
    }
    console.log(savedPerson);
  });
}
router.get('/', function(req,res){
  console.log("in install");
  addPeopleToDatabase(chiYaks);
  res.sendStatus(201);
});


module.exports = router;
