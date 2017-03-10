var express = require("express");
var authRoutes = express.Router();
var User = require("../model/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/signup", function (req, res) {
   User.find({email: req.body.email}, function (err, existingUser) {
       if (err) return res.status(500).send(err);
       if (existingUser.length) return res.send({ success: false, message: "That email is already taken, did you want to sign in???" });
       
       var newUser = new User(req.body);
       newUser.save(function (err) {
           if (err) return res.status(500).send(err);
           res.status(201).send({success: true, user: newUser, message: "successfully created new user!"})
       });
   });
});

authRoutes.post("/login", function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(401).send({ success: false, message: "Invalid email or password"});
        }
        var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "2h"});
        res.send({token: token, success: true, user: user.toObject(), message: "Heres your token!"});
    });
});

module.exports = authRoutes;