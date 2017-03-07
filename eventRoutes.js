var express = require('express')
var eventRoute = express.Router();
var Event = require('./models/event')

eventRoute.get('/', function (req, res) {
    Event.find(function (err, events) {
        if (err) res.status(500).send(err)
        res.send(events)
    })
})

eventRoute.post('/', function (req, res) {
    var newEvent = new Event(req.body)
    newEvent.save(function (err, event) {
        if (err) res.status(500).send(err)
        res.status(201).send(event)
    })
})

eventRoute.get('/category/:category', function (req, res) {
    Event.find(req.params, function (err, events) {
        if (err) res.status(500).send(err)
        res.send(events)
    })
})

eventRoute.delete('/:id', function (req, res) {
    Event.findByIdAndRemove(req.params.id, function (err, event) {
        if (err) res.status(500).send(err)
        res.send(event);
    })
})

eventRoute.get('/search', function (req, res) {
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

module.exports = eventRoute