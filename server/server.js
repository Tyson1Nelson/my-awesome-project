var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var path = require("path");
var booze = require("./routes/boozeRoute")

app.use(bodyParser.json());
app.use("/boozer", booze);
app.use(express.static(path.join(__dirname,"public")));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/booze", function (err) {
    if(err) throw err;
    console.log("--- Connected to mongoDB ---");
});


app.listen(port, function () {
    console.log("******** App is listening on port " + port + "********");
});
