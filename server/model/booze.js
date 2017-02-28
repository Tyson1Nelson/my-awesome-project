var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var boozeSchema = new Schema({
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        content: Number,
        price: Number
});

module.exports = mongoose.model("booze", boozeSchema);