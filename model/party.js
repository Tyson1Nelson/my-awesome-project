var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var partySchema = new Schema({

    personPosting: String,
    host: String,
    typeOfParty: String,
    location: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: String,
        zip: String
    },
    alcohol: {
        type: Boolean,
        required: true
    },
    admission: String,
    admissionAmount: Number,
    dateAndTime: String,
    comments: [String]
});

module.exports = mongoose.model("Party", partySchema);