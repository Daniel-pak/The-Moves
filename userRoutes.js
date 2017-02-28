var express = require("express")
var userRoutes = express.Router()
var User = require("./models/user")

userRoutes.post('/', function (req, res) {
    var newUser = new User(req.body)

    newUser.save(function (err, user) {
        if (err) res.send(500).send(err)
        res.send(user)
    })
})


module.exports = userRoutes;