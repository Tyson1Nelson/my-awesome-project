var express = require("express");
var UserRoute = express.Router();
var User = require("../model/user");

UserRoute.route("/")
    .get(function (req, res) {
        User.find(function (err, user) {
            if (err) return res.status(500).send(err);
            res.send(user);
        })
    })

.post(function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) return res.status(500).send(err);
        res.status(201).send(user)
    });
});

UserRoute.route("/:id")
    .get(function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) return res.status(500).send(err);
            res.status(201).send(user);
        });
    })
    .put(function (req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, user) {
            if (err) return res.status(500).send(err);
            res.status(201).send(user)
        })
    })
    .delete(function (req, res) {
        User.findByIdAndRemove(req.params.id, function (err, user) {
            if (err) return res.status(500).send(err);
            console.log("DELETED");
            res.send({
                message: "Successfully deleted",
                success: true
            });
        });
    });

UserRoute.route("/login")
    .post(function (req, res) {
    console.log(req.body);
        User.findOne(req.body.body, function (err, user) {
            if (err) return res.status(500).send(err);
            res.status(201).send(user);
        })
    });


module.exports = UserRoute;