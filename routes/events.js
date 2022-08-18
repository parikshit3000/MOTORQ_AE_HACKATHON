const express = require('express')
const router = express.Router();
const { createEvent, updateEvent, deleteEvent, getEvent, getAllEvents, registerUser, loginUser, loginAdmin, regForEvent } = require('../controllers/users');

// Register the user
router.post("/register", registerUser);

// Get all events
router.get("/", getAllEvents);

// Get Events Registered by user
router.get("/:userId", );

// Create a Event
router.post("/", createEvent);

// Modify the Event
router.put("/:eventId", updateEvent);

// Delete an Event
router.delete("/:eventId", deleteEvent);

// Register for the Event
// router.post("/:eventId", regForEvent);

// Verify the user for that event
// router.post("/:verify", );

router.get("/:eventId", getEvent);

// Login User
router.post("/loginUser", loginUser);

// Login Admin
router.post("/loginAdmin", loginAdmin);

module.exports = router;