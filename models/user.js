var mongoose = require("mongoose");
var schema = mongoose.Schema;

var newUserSchema = new schema({
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: String,
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    isBusinessOwner: {
        type: Boolean,
        default: false
    },
    postedEventId: [{
        type: schema.Types.ObjectId,
        ref: "Event"
    }],
    savedEventId: [{
        type: schema.Types.ObjectId,
        ref: "Event"
    }]
})

module.exports = mongoose.model("User", newUserSchema);