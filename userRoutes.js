//'use strict';
var express = require("express")
var userRoutes = express.Router()
var User = require("./models/user")

userRoutes.post('/', function (req, res) {
    var newUser = new User(req.body)

    newUser.save(function (err, user) {
        if (err) return res.send(500).send(err)
        res.send(user)
    })
})

userRoutes.get('/sign-in/:email/', function (req, res) {
    console.log(req.params.email)
    console.log(req.body)
    User.findOne({
            email: req.params.email
        })
        .populate("savedEventId")
        .exec(function (err, user) {
            if (err) return res.status(500).send(err)
            res.send(user)
        })

})

userRoutes.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, user) {
        if (err) res.status(500).send(err)
        res.send(user)
    })
})

userRoutes.get('/myEvents/:id', function (req, res) {
    User.findById(
            req.params.id
        )
        .populate("savedEventId")
        .exec(function (err, user) {
            if (err) return res.status(500).send(err)
            res.send(user)
        })
})

userRoutes.get('/postedEvents/:id', function (req, res) {
    User.findById(
            req.params.id
        )
        .populate("postedEventId")
        .exec(function (err, user) {
            if (err) return res.status(500).send(err)
            res.send(user)
        })
})





module.exports = userRoutes;