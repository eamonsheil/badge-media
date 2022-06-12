const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        unique : [true, "An account already exists with that address"],
        lowercase: true,
        trim: true, //removes trailing whitespace from user input
        required: [true, "Please enter an email"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    created: { 
        type: Date, 
        default: Date.now
    }
})


module.exports = mongoose.model('User', userSchema)