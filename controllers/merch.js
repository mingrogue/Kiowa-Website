var MerchService = require('../services/merch')

exports.createMerchandise = async function (req, res, next, name) {
    try{
        var ret = await MerchService.createMerchandise(req, res, name);
        return res.status(200).json({ status: 200, data: ret, message: "Photo uploaded successfully" });
    } catch (e) {
        //console.log(e)
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getByCampaignum = async function (req, res, next) {
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var merchs = await MerchService.getByCampaignum(req.params, page, limit);
        return res.status(200).json({ status: 200, data: merchs, message: "Retrieved merch" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
