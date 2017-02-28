var express = require("express");
var boozeRoute = express.Router();
var Booze = require("../model/booze");

boozeRoute.route("/")
    .get(function (req, res) {
        Booze.find(function (err, booze) {
            if (err) return res.status(500).send(err);
            res.send(booze);
        })
    })

    .post(function (req, res) {
        var booze = new Booze(req.body);
        booze.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(booze)
        });
    });

boozeRoute.route("/:id")
    .get(function (req, res) {
        Booze.findById(req.params.id, function (err, booze) {
            if (err) return res.status(500).send(err);
            res.status(201).send(booze);
        });
    })
    .put(function (req, res) {
        Booze.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, booze) {
            if (err) return res.status(500).send(err);
            res.status(201).send(booze)
        })
    })
    .delete(function (req, res) {
        Booze.findByIdAndRemove(req.params.id, function (err, booze) {
            if (err) return res.status(500).send(err);
            console.log("DELETED");
            res.send({
                message: "Successfully deleted",
                success: true
            });
        });
    });

module.exports = boozeRoute;