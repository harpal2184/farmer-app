var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  path = require('path'),
  mongoose = require('mongoose'),
  Task = require('./api/models/daily-work-model.js'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/farmdb'); 
mongoose.connect('mongodb+srv://harpalmsu:harpal2184@cluster0.boxoc.mongodb.net/Farmerdb?authSource=admin&replicaSet=atlas-fk3w1h-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Put your angular dist folder here
app.use('/', express.static(path.join(__dirname, '../dist/farmer-app')));
// app.use('/farmer-app', sample);

var routes = require('./api/routes/daily-work-routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Farmer App API server started on: ' + port);
