const Event = require("../../models/Events");

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
        await Event.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json("Event Successfully Updated!");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        await event.deleteOne();
        res.status(200).json("Event Successfully Deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
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