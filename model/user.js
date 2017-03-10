var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    imgUrl: String,
    goingToParties: [String]

});

module.exports = mongoose.model("User", userSchema);