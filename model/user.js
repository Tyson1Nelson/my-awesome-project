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
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password:{
        type: String,
    },
    imgUrl: String,
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    email: {
        type: String,
        required: true
    },
    goingToParties: [String]
    
});

module.exports = mongoose.model("User", userSchema);