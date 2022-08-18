const Event = require("../models/Events");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        const newUser = await new User(req.body);
        await newUser.save();
        res.status(200).json("User Registration Successful");
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

// exports.regForEvent = async (req, res) => {
//     try {
//         const event = await Event.findById(req.params.eventId);
//         if (!event.participants.includes(req.body.userId)) {
//             await event.updateOne({ $push: { participants: req.body.userId } });
//             res.status(200).json("Registered!");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.regForEvent = async (req, res) => {
//     const eId = req.params.eventId;
//     const pId = req.body.participantId;
//     return new Promise((resolve, reject) => {
//         Event.findById(eId, (error, item) => {
//             const result = {
//                 overlap: false
//             };

//             if (error) {
//                 res.status(422).json(error.message);
//             }

//             if (item) {
//                 item.forEach(function() {
//                     Event.find(
//                         {
//                             _id: { $ne: eId },
//                             participants: { $eq: pId },
//                             "startTimeStamp": { $gt: endTimeStamp },
//                             "endTimeStamp": { $lt: startTimeStamp }
//                         },
//                         (err, items) => {
//                             if (err) {
//                                 res.status(422).json(err.message);
//                             }

//                             if (items.length > 0) {
//                                 result.overlap = true;
//                                 res.status(400).json("Schedule Overlap");
//                             }
//                             else
//                             {
//                                 res.status(200).json("Registration Successful");
//                             }
//                             resolve(result);
//                         }
//                     );
//                 })
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

// exports.regForEvent = async (req, res) => {
//     const eId = req.params.eventId;
//     const pId = req.body.participantId;
//     const pEvents = [];
//     eStartTime = null, eEndTime = null;
//     overlap = false;
//     for await (const doc of Event.find()) {
//         if (doc["participants"].includes("pId")){
//             pEvents.append(doc["_id"]);
//         }
//     }
//     Event.findById(eId, function (err, docs) {
//         if (err){
//             console.log(err);
//         }
//         else{
//             eStartTime = docs.startTimeStamp; //Not retrieving
//             eEndTime = docs.endTimeStamp;
//         }
//     });

//     for(const eve of pEvents){
//         Event.findById(eve, function (err, docs) {
//             if (err){
//                 console.log(err);
//             }
//             else{
//                if ((
//                     Date.parse(eve.startTimeStamp) < Date.parse(eStartTime) 
//                     &&
//                     Date.parse(eStartTime) < Date.parse(eve.endTimeStamp)
//                 ) || (
//                     Date.parse(eve.startTimeStamp) < Date.parse(eEndTime) 
//                     &&
//                     Date.parse(eEndTime) < Date.parse(eve.endTimeStamp)
//                 ))
//                 overlap = true; 
//             }
//         });
//     }
    // Event.findById(eId, (error, item) => {
    //     const result = {
    //         overlap: false
    //     };

    //     if (error) {
    //         res.status(422).json(error.message);
    //     }
    //     console.log(typeof(item));
    //     if (item) {
    //     console.log(item);

    //         item.forEach(function () {
    //             Event.find(
    //                 {
    //                     _id: { $ne: eId },
    //                     participants: { $eq: pId },
    //                     "startTimeStamp": { $gt: endTimeStamp },
    //                     "endTimeStamp": { $lt: startTimeStamp }
    //                 },
    //                 (err, items) => {
    //                     if (err) {
    //                         res.status(422).json(err.message);
    //                     }

    //                     if (items.length > 0) {
    //                         result.overlap = true;
    //                         res.status(400).json("Schedule Overlap");
    //                     }
    //                     else {
    //                         res.status(200).json("Registration Successful");
    //                     }
    //                 }
    //             );
    //         });
        // }
    // })
// }

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
        !user && res.status(500).json("Username Incorrect!");

        if (req.body.password !== user.password) {
            res.status(500).json("Wrong Password!");
        }

        if (user) {
            if (req.body.password == user.password) {
                res.status(200).json({
                    msg: 'ok'
                });
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        console.log((req.body.email));
        if (req.body.email === "admin") {
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