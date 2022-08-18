const Event = require("../models/Events");

// exports.createEvent = async (req, res) => {
//     try {
//         const newEvent = await new Event(req.body);
//         const savedEvent = await newEvent.save();
//         res.status(200).json(savedEvent);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.updateEvent = async (req, res) => {
//     try {
//         // const event = await Event.findById(req.params.id);
//         await Event.findByIdAndUpdate(req.params.eventId, {
//             $set: req.body,
//         });
//         res.status(200).json("Event Successfully Updated!");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.deleteEvent = async (req, res) => {
//     try {
//         const event = await Event.findById(req.params.eventId);
//         await event.deleteOne();
//         res.status(200).json("Event Successfully Deleted!");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.getEvent = async (req, res) => {
//     try {
//         const event = await Event.findById(req.params.eventId);
//         res.status(200).json(event);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.getAllEvents = async (req, res) => {
//     try {
//         const event = await Event.find();
//         res.status(200).json(event);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.participantScheduleOverlaps = async (trainingId, participantId) => {
//     return new Promise((resolve, reject) => {
//       Events.findById(trainingId, (error, item) => {
//         const result = {
//           overlap: false,
//           ranges: []
//         };
  
//         if (error) {
//           reject(utils.buildErrObject(422, error.message));
//         }
  
//         if (item) {
//           for (const schedule of item.schedule) {
//             Events.find(
//               {
//                 _id: { $ne: trainingId },
//                 participants: { $eq: participantId },
//                 'schedule.end': { $gt: schedule.start },
//                 'schedule.start': { $lt: schedule.end }
//               },
//               (err, items) => {
//                 if (err) {
//                   reject(utils.buildErrObject(422, err.message));
//                 }
  
//                 if (items.length > 0) {
//                   result.overlap = true;
//                   result.ranges.push(
//                     ...items.map(data => {
//                       return data.schedule;
//                     })
//                   );
//                 }
  
//                 resolve(result);
//               }
//             );
//           }
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   };