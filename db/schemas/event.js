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

module.exports = Event;
