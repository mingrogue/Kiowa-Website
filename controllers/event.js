var EventService = require('../services/event')

exports.createEvent = async function (req, res, next) {
    try {
        var result = await EventService.createEvent(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateEvent = async function (req, res, next) {
    try {
        var result = await EventService.updateEvent(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteEvent = async function (req, res, next) {
    try {
        var result = await EventService.deleteEvent(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAllEvents = async function (req, res, next) {
    try {
        var events = await EventService.getAllEvents(req.headers.token, {});
        return res.status(200).json({ status: 200, data: events, message: "All events reteieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getEventByCode = async function (req, res, next) {
    try {
        var Admins = await EventService.getEventByCode(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: Admins[0], message: "Event retrieved by code" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}