var mongoose = require("mongoose");
var schema = mongoose.Schema;

var eventSchema = new schema({
    category: { 
        type: String, 
        enum: ["music", "party", "food", "outdoors", "night_time", "theater", "art"],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    website: String,
    description: String, 
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business"
    }
})

module.exports = mongoose.model("Event", eventSchema)