var express = require('express')
var eventRoute = express.Router();
var Event = require('./models/event')

eventRoute.post('/', function (req, res) {
    var newEvent = new Event(req.body)
    newEvent.save(function (err, event) {
        if (err) res.status(500).send(err)
        res.status(201).send(event)
    })
})

eventRoute.delete('/:id', function (req, res) {
    Event.findByIdAndRemove(req.params.id, function (err, event) {
        if (err) res.status(500).send(err)
        res.send(event);
    })
})


module.exports = eventRoute;