var express = require('express')
var eventRoute = express.Router();
var Event = require('./models/event')

eventRoute.get('/', function(req ,res) { 
    Event.find(function(err, events) { 
        if(err) res.status(500).send(err)
        res.send(events)
    })
})

eventRoute.post('/', function(req, res) { 
    var newEvent = new Event(req.body)
    newEvent.save(function(err, event) { 
        if (err) res.status(500).send(err)
        res.status(201).send(event)
    })
})

eventRoute.get('/category/:category', function(req, res) { 
    Event.find(req.params, function(err, events) { 
        if(err) res.status(500).send(err)
        res.send(events)
    })
})

module.exports = eventRoute