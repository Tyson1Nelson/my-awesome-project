var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var expressJwt  = require("express-jwt");
var port = process.env.PORT || 8000;
var config = require("./config");
var path = require("path");
//var user = require("./routes/userRoute")


app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"public")));

app.use("/api", expressJwt({secret: config.secret}));

app.use("/auth", require("./routes/authRoute"));
app.use("/api/party", require("./routes/partyRoute"));

mongoose.Promise = global.Promise;
mongoose.connect(config.database, function (err) {
    if(err) throw err;
    console.log("   ---------   Connected to mongoDB   ---------");
});


app.listen(port, function () {
    console.log("\n******** Server is listening on port " + port + " ********");
});
