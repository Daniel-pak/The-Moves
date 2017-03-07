var express = require("express")
var userRoutes = express.Router()
var User = require("./models/user")
var jwt = require('jsonwebtoken')
var config = require('./config')


userRoutes.post('/', function (req, res) {
    var newUser = new User(req.body)

    newUser.save(function (err, user) {
        if (err) return res.send(500).send(err)
        if (user.length) return res.send({
            success: false,
            message: "That email is already taken, did you mean to log in?"
        })
    })
})

userRoutes.post('/sign-in', function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(401).send({
                success: false,
                message: "Invalid email or password"
            })
        }
        var token = jwt.sign(user.toObject(), config.secret);
        res.send({
            token: token,
            success: true,
            user: user.toObject(),
            message: "Here's your token"
        })
    })
})

module.exports = userRoutes;