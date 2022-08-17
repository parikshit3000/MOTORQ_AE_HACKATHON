const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        unique: true
    },
    startTimeStamp: {
        type: Date,
        required: true,
    },
    endTimeStamp: {
        type: Date,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    eventCapacity: {
        type: String,
        required: true,
    },
    location: [
        { lat: Number, lng: Number },
    ],
    participants: {
        type:Array,
        default:[]
    }
}, { timestamps: true });

module.exports = mongoose.model("Events", eventSchema);