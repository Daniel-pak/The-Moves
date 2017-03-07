var express = require("express");
var allEventRoute = express.Router(); 
var Event = require('./models/event')

allEventRoute.get('/', function (req, res) {
    Event.find(function (err, events) {
        if (err) res.status(500).send(err)
        res.send(events)
    })
})

allEventRoute.get('/category/:category', function (req, res) {
    Event.find(req.params, function (err, events) {
        if (err) res.status(500).send(err)
        res.send(events)
    })
})

allEventRoute.get('/search', function (req, res) {
    var query = {};
    if (req.query.title) {
        query.title = req.query.title;
    }
    
    Event.find()
        .or([{title: new RegExp(query.title, "i")}, {category: new RegExp(query.title, "i")}])
//        .where("title").in(req.query.title)
        .exec(function(err, events) { 
        if (err) res.status(500).send(err)
        res.send(events)
    })
})

module.exports = allEventRoute;