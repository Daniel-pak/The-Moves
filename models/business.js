var mongoose = require("mongoose");
var schema = mongoose.Schema; 

var businessSchema = new schema({
    name: String, 
    location: { 
        city: String, 
        zipcode: String, 
    }
})

module.exports = businessSchema;