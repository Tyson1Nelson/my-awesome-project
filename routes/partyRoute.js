var express = require("express");
var partyRoute = express.Router();
var Party = require("../model/party");

partyRoute.route("/")
    .get(function (req, res) {
        Party.find(function (err, party) {
            if (err) return res.status(500).send(err);
            res.send(party);
        })
    })

    .post(function (req, res) {
        console.log(res.body);
        var party = new Party(req.body);
        party.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(party)
        });
    });

partyRoute.route("/:id")
    .get(function (req, res) {
        Party.findById(req.params.id, function (err, party) {
            if (err) return res.status(500).send(err);
            res.status(201).send(party);
        });
    })
    .put(function (req, res) {
        Party.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, party) {
            if (err) return res.status(500).send(err);
            res.status(201).send(party)
        })
    })
    .delete(function (req, res) {
        Party.findByIdAndRemove(req.params.id, function (err, party) {
            if (err) return res.status(500).send(err);
            console.log("DELETED");
            res.send({
                message: "Successfully deleted",
                success: true
            });
        });
    });

module.exports = partyRoute;