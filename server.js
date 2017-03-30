var express = require('express');
var app = express();
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var userRoutes = require('./userRoutes');
var eventRoutes = require('./eventRoutes');
var config = require('./config');
var port = process.env.PORT || 9000;

app.use(bodyParser.json());

app.use('/api', expressJwt({secret: config.secret}))

mongoose.connect(config.database, function (err) {
    if (err) console.log(err)
    console.log("Connected to the Database boss!")
})

app.use(express.static(path.join(__dirname, "public")));

app.use('/user', userRoutes);
app.use('/allevents', require('./allEventsRoutes'));
app.use('/api/user-info', require('./userinfoRoutes'))
app.use("/api/event", eventRoutes);

app.listen(port, function () {
    console.log("Server running on port " + port);
})