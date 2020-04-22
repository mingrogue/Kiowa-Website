var StudentService = require('../services/student')

exports.createStudent = async function (req, res, next) {
    try {
        var student = await StudentService.createStudent(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: student, message: "Succesfully registered student" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.deleteStudent = async function (req, res, next) {
    try {
        ret = await StudentService.deleteStudent(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateStudent = async function (req, res, next) {
    try {
        var ret = await StudentService.updateStudent(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAllStudents = async function (req, res, next) {
    try {
        var students = await StudentService.getAllStudents(req.headers.token, {})
        return res.status(200).json({ status: 200, data: students, message: "Succesfully retrieved Students" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getStudentByEmail = async function (req, res, next) {
    try {
        var student = await StudentService.getStudentByEmail(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: student[0], message: "Admin retrieved by email" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.changePassword = async function (req, res, next) {
    try {
        var result = await StudentService.changePassword(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
