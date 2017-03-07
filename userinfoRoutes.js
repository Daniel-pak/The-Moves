var express = require("express")
var userInfoRoutes = express.Router()
var User = require("./models/user")

userInfoRoutes.get('/myEvents/:id', function (req, res) {
    User.findById(
            req.params.id
        )
        .populate("savedEventId")
        .exec(function (err, user) {
            if (err) return res.status(500).send(err)
            res.send(user)
        })
})

userInfoRoutes.get('/postedEvents/:id', function (req, res) {
    User.findById(
            req.params.id
        )
        .populate("postedEventId")
        .exec(function (err, user) {
            if (err) return res.status(500).send(err)
            res.send(user)
        })
})

userInfoRoutes.put('/:id', function(req, res) { 
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedUser) { 
        if (err) return res.status(500).send(err);
        return res.send(updatedUser);
    })
})

module.exports = userInfoRoutes;