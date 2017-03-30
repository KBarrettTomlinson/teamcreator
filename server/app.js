// globals and requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
// var index = require('./routes/index.js');
// var people = require('./routes/people.js');
// var teams = require('./routes/teams.js');
var install =  require('./routes/install.js');

//mongoose config
var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/teamsdata";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});

//If we successfully hooked up to the database, let us know!
MongoDB.once("open", function(){
  console.log("Tots connected to Mongo, meow.");
});

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use('/', index);
// app.use('/people', people);
// app.use('/teams', teams);
app.use('/install', install);

// spin up server
app.listen(port, function() {
  console.log('Listening on port:', port);
});
