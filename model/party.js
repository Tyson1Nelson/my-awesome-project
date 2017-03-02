var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var partySchema = new Schema({

    personPosting: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
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
    peopleGoing: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
});

module.exports = mongoose.model("Party", partySchema);