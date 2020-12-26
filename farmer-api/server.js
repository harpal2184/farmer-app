var express = require('express');
var app = express();
var  path = require('path');
var  mongoose = require('mongoose');
var  Task = require('./api/models/daily-work-model.js'); //created model loading here
var  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/farmdb'); 
// mongoose.connect('mongodb+srv://harpalmsu:harpal2184@cluster0.boxoc.mongodb.net/Farmerdb?authSource=admin&replicaSet=atlas-fk3w1h-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');
mongoose.connect('mongodb+srv://harpalmsu:harpal2184@cluster0.boxoc.mongodb.net/Farmerdb?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Put your angular dist folder here
app.use('/', express.static(path.join(__dirname, '../dist/farmer-app')));
// app.use('/farmer-app', sample);

// // Create link to Angular build directory
// var distDir = __dirname + "../dist/farmer-app/";
// app.use(express.static(distDir));


var routes = require('./api/routes/daily-work-routes'); //importing route
routes(app); //register the route


var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
