const express = require('express')
const router = express.Router();
const { createEvent, updateEvent, deleteEvent, getEvent, getAllEvents} = require('../../controllers/admin/events')

router.post("/createEvent", createEvent);

router.put("/update/:id", updateEvent);

router.delete("/delete/:id", deleteEvent);

router.get("/:id", getEvent);

router.get("/", getAllEvents);

module.exports = router;