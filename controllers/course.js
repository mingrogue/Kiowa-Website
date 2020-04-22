var CourseService = require('../services/course')

exports.createCourse = async function (req, res, next) {
    try {
        var course = await CourseService.createCourse(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: course, message: "Succesfully registered Course" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteCourse = async function (req, res, next) {
    try {
        ret = await CourseService.deleteCourse(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateCourse = async function (req, res, next) {
    try {
        var ret = await CourseService.updateCourse(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAllCourses = async function (req, res, next) {
    try {
        var users = await CourseService.getAllCourses(req.headers.token, {})
        return res.status(200).json({ status: 200, data: users, message: "Succesfully retrieved courses" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getCourseByCode = async function (req, res, next) {
    try {
        var Admins = await CourseService.getCourseByCode(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: Admins[0], message: "Course retrieved by email" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
