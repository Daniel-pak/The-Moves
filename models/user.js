var mongoose = require("mongoose");
var schema = mongoose.Schema;
var bcrypt = require('bcrypt');

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

newUserSchema.pre('save', function(next) { 
    var user = this; 
    if (!user.isModified('password')) return next(); 
    bcrypt.hash(user.password, 10, function(err, hash) { 
        if (err) return next(err);
        user.password = hash; 
        next(); 
    })
})  

newUserSchema.methods.checkPassword = function(passwordAttempt, callback){ 
    bcrypt.compare(passwordAttempt, this.password, function(err, isMatch) { 
        callback(null, isMatch);
    });
};

newUserSchema.methods.withoutPassword = function() { 
    var user = this.toObject(); 
    delete user.password; 
    return user; 
}

module.exports = mongoose.model("User", newUserSchema);