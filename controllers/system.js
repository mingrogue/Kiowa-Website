var SystemService = require('../services/system')

exports.login = async function (req, res, next) {
    try {
        var ret = await SystemService.login(req.body);
        return res.status(200).json({ status: 200, data: ret.data, message: ret.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.logout = async function (req, res, next) {
    try {
        var result = await SystemService.logout(req.headers.token)
        return res.status(200).json({ status: 200, data: result.data, message: result.message });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}