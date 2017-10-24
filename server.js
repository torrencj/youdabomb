// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = process.env.PORT || 8000;

app.use(express.static('views/layouts/public'))
app.use(bodyParser.urlencoded({ extended: true }));
