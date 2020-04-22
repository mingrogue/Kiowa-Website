var Event                = require('../db/schemas/event')
var Validator            = require('../validator')

exports.createEvent = async function (token, data) {
    try {
            var admin = Validator.validate(token, data, ['eventname', 'eventstart', 'eventend', 'description', 'code'])
            //console.log(ad.role)
            if(admin.role != 'Admin') {
                throw new Error("Permission Denied!!")
            }
            var found = await Event.findOne({code: data.code}) 
            if(!found) {
                var event = await Event.create({eventname: data.eventname, creator: admin.email, eventstart: data.eventstart, eventend: data.eventend, description: data.description, code: data.code}) 
                return {data: event, message: "Event has been succesfully created"}
            }
            else {
                return {message: "Event already exists" }
            }
        }
        catch(e){
            //console.error(e)
            throw Error('Error in creating events: ' + e)
    }
}

exports.updateEvent = async function (token, data) {
    try {
            var admin = Validator.validate(token, data, ['eventname', 'eventstart', 'eventend', 'description', 'code'])
            //console.log(ad.role)
            if(admin.role != 'Admin') {
                throw new Error("Permission Denied!!")
            }
            var found = await Event.findOne({code: data.code}) 
            if(!found) {
                var event = await Event.findOneAndUpdate({ code: data.code }, data, {new : true}) 
                return {data: event, message: "Event has been succesfully created"}
            }
            else {
                return {message: "Event already exists" }
            }
        }
        catch(e){
            //console.error(e)
            throw Error('Error in creating events: ' + e)
    }
}

exports.deleteEvent = async function (token, data) {
    try {
            var admin = Validator.validate(token, data, ['eventname', 'eventstart', 'eventend', 'description', 'code'])
            //console.log(ad.role)
            if(admin.role != 'Admin') {
                throw new Error("Permission Denied!!")
            }
            var found = await Event.findOne({code: data.code}) 
            if(!found) {
                var event = await Event.findOneAndUpdate({code: data.code}, {active: false}) 
                return {data: event, message: "Event has been succesfully deleted"}
            }
            else {
                return {message: "Event already exists" }
            }
        }
        catch(e){
            //console.error(e)
            throw Error('Error in creating events: ' + e)
    }
}


exports.getAllEvents = async function (token, query) {
    try {
        if(Validator.validatelogin(token)) {
            var event = await Event.find(query)
            return event;
        } 
    }catch (e) {
        // Log Errors
        throw Error('Error while retrieving Events: ' + e)
    }
}


exports.getEventByCode = async function (token, data) {
    try {
        if(Validator.validate(token, data, ['code'])) {
            let event = await Event.find({code: data.code});
            if(event.length > 0) {
                return event
            }
            else {
                throw Error(data.email + ": No User found.")
            }
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error getting user by email: ' + e)
    }
}