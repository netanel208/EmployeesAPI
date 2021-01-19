const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan");

// create express app
const app = express();
//const server = require('http').createServer(app);

require('./models')();
require('./common/common');

app.use(morgan('dev'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to RestaurantEmployeesAPI");
});

require('./routes')(app);

// listen for requests
app.listen(3000 ,() => {
    console.log("Server is listening on port 3000");
});