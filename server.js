var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var eventRoutes = require('./eventRouter')
var port = process.env.PORT || 8000;


mongoose.connect("mongodb://localhost/places", function (err) {
    if (err) console.log(err)
    console.log("Connected to the Database boss!")
})

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json());

app.use("/event", eventRoutes)


app.listen(port, function () {
    console.log("Server running on port " + port);
})