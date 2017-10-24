// Dependencies
var express = require("express");
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = process.env.PORT || 8000;

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function() {
  console.log("Listening on port " + port);
})
