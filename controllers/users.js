const Event = require("../models/Events");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        const newUser = await new User(req.body);
        await newUser.save();
        res.status(200).json("Registration Successful");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const event = await Event.find();
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.createEvent = async (req, res) => {
    try {
        const newEvent = await new Event(req.body);
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateEvent = async (req, res) => {
    try {
        // const event = await Event.findById(req.params.id);
        await Event.findByIdAndUpdate(req.params.eventId, {
            $set: req.body,
        });
        res.status(200).json("Event Successfully Updated!");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        await event.deleteOne();
        res.status(200).json("Event Successfully Deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("Username Incorrect!");

        if (req.body.password !== user.password) {
            res.status(400).json("Wrong Password!");
        }

        if (user) {
            if (req.body.password == user.password) {
                res.status(200).json("LogIn Successful!");
            }
        }
    } catch (err) {
        response.status(500).json(err);
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        if (req.body.name === "admin") {
            if (req.body.password === "admin123") {
                res.status(200).json("LogIn Successful!");
            }
            else {
                res.status(400).json("Password Incorrect!");
            }
        }
        else {
            res.status(404).json("Username Incorrect!");
        }
    } catch (err) {
        response.status(500).json(err);
    }
};