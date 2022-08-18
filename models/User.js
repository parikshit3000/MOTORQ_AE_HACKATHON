const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 32,
    },
    registeredEvents: {
        type:Array,
        default:[]
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);