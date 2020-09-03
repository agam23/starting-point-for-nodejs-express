// all "require" better to include all at top
require('dotenv').config()

var express = require('express')
var app = express()

var router = require('./routes/main-route')

//"use" statements:

//static folder (e.g. css files)
app.use('/public', express.static('public'))

//all your routes
app.use('/', router);

//templating engine
app.set('view engine', 'pug')

//setting port
var port = process.env.PORT || 3000;

//start listening at the configured port
app.listen(port, "localhost", () => { console.log("Listning at port: " + port) });
