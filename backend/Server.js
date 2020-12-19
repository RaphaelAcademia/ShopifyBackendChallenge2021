// Dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./api/Routes.js'); 
const Receipt = require('./api/Model.js')

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ImageRepo', { 
	useNewUrlParser: true,
	useUnifiedTopology: true 
}); 

// Dependencies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful API started on: ' + port);