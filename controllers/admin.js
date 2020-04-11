var AdminService = require('../services/admin')

exports.createAdmin = async function (req, res, next) {
    try {
        var admin = await AdminService.createAdmin(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: admin, message: "Succesfully registered Admin" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.loginaAdmin = async function (req, res, next) {
    try {
        var ret = await AdminService.loginaAdmin(req.body);
        return res.status(200).json({ status: 200, data: ret.data, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.logoutAdmin = async function (req, res, next) {
    try {
        var result = await AdminService.loginaAdmin(req.headers.token)
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteAdmin = async function (req, res, next) {
    try {
        ret = await AdminService.deleteAdmin(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.activateAdmin = async function (req, res, next) {
    try {
        ret = await AdminService.activateAdmin(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateAdmin = async function (req, res, next) {
    try {
        var ret = await AdminService.updateAdmin(req.headers.token, req.body);
        return res.status(200).json({ status: 200, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAllAdmins = async function (req, res, next) {
    try {
        var users = await AdminService.getAllAdmins(req.headers.token, {})
        return res.status(200).json({ status: 200, data: users, message: "Succesfully retrieved admins" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAdminByEmail = async function (req, res, next) {
    try {
        var Admins = await AdminService.getAdminByEmail(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: Admins[0], message: "Admin retrieved by email" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.changePasswordAdmin = async function (req, res, next) {
    try {
        var result = await AdminService.changePasswordAdmin(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
