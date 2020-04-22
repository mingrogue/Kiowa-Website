// var express = require('express');
// var router = express.Router();
// var multer  = require("multer")

// var MerchController = require('../controllers/merch')
// var name = {}
// var storage =   multer.diskStorage({
//     destination: function (req, file, callback) {
//     callback(null, "./images/merch");
//     },
//     filename: function (req, file, callback) {
//         tmp_name = ""
//         if (file.fieldname == "photo") {
//             name.fg = (file.originalname.split('.')[0] + '-' + Date.now() + "." + file.originalname.split('.')[1])
//             tmp_name = name.fg
//         }
//         if (file.fieldname == "photo1") {
//             name.bg = (file.originalname.split('.')[0] + '-' + Date.now() + "." + file.originalname.split('.')[1])
//             tmp_name = name.bg
//         }
//     callback(null, tmp_name);
//     }
// });


// router.post('/create', multer({ storage : storage}).fields([{'name':"photo" }, {'name':"photo1" }]), function(req,res,next){MerchController.createMerchandise(req,res,next,name)})
// router.get('/campaign/:campaignum', MerchController.getByCampaignum)

// module.exports = router;