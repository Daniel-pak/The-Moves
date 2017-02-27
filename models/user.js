var mongoose = require("mongoose");
var schema = mongoose.Schema; 

var newUserSchema = new schema({ 
    firstName: String, 
    lastName: String, 
    email: String, 
    password: String,
    location: String
})

module.exports = mongoose.model("User", newUserSchema);

