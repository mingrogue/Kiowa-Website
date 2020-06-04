var mongoose = require('mongoose')
require('mongoose-double')(mongoose)


const EventSchema  = new mongoose.Schema({
    eventname: String,
    creator: String,
    eventstart: Date,
    eventend: Date,
    description: String,
    code: Number,
    active: {
        type: Boolean, default: false
    },
    created_on: { type: Date, default: Date.now }
})

const Event = mongoose.model('event', EventSchema)

/**
 * @swagger
 * definitions:
 *   Event:
 *     type: object
 *     properties:
 *       eventname:
 *         description: name of the event
 *         type: string
 *       creator:
 *         description: id of the creator
 *         type: string
 *       eventstart:
 *         description: date of the start of event
 *         type: string
 *       eventend:
 *         description: date of the end of event
 *         type: string
 *       description:
 *         description: description of the event
 *         type: string
 *       code:
 *         description: code givento the event
 *         type: string
 *       active:
 *         description: used to determine if the event is active of not
 *         type: boolean
 */

module.exports = Event;
