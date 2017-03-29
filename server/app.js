// globals and requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
// var index = require('./routes/index.js');
// var people = require('./routes/people.js');
// var teams = require('./routes/teams.js');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use('/', index);
// app.use('/people', people);
// app.use('/teams', teams);

// spin up server
app.listen(port, function() {
  console.log('Listening on port:', port);
});
