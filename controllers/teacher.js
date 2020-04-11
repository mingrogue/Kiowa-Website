var TeacherService = require('../services/teacher')

exports.createTeacher = async function (req, res, next) {
    try {
        var teacher = await TeacherService.createTeacher(req.headers.token, req.body);
        return res.status(200).json({ status: 200, body: teacher, message: teacher.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.deleteTeacher = async function (req, res, next) {
    try {
        ret = await TeacherService.deleteTeacher(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateTeacher = async function (req, res, next) {
    try {
        var ret = await TeacherService.updateTeacher(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAllTeachers = async function (req, res, next) {
    try {
        var teachers = await TeacherService.getAllTeachers(req.headers.token, {})
        return res.status(200).json({ status: 200, data: teachers, message: "Succesfully retrieved teacher" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getTeacherByEmail = async function (req, res, next) {
    try {
        var teacher = await TeacherService.getTeacherByEmail(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: teacher[0], message: "teacher retrieved by email" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.changePassword = async function (req, res, next) {
    try {
        var result = await TeacherService.changePassword(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
