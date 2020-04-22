var RoleService = require('../services/role')

exports.getAllRoles = async function (req, res, next) {
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var roles = await RoleService.getAllRoles({}, page, limit);
        return res.status(200).json({ status: 200, data: roles, message: "Retrieved all roles" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateRole = async function (req, res, next) {
    try {
        var ret = await RoleService.updateRole(req.headers.token, req.body);
        return res.status(200).json({ status: 200, data: ret, message: "Role updated successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
