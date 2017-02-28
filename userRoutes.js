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

userRoutes.get('/:id', function(req, res) { 
    User.findById(req.params.id, function(err, user) { 
        if(err) return res.status(500).send(err)
        res.send(user)
    })
})


module.exports = userRoutes;