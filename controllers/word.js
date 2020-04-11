// var WordService      = require('../services/word')
// const spawn          = require("child_process").spawn

// exports.getTypes = async function (req, res, next) {
//     //logger.info('wordcontroller -- getTypes -- START')
//     try {
//         var types = await WordService.getTypes(req.headers.token);
//         //logger.info('wordcontroller -- getTypes -- END')
//         if (types) {
//             return res.status(200).json({ status: 200, data: types, message: "Word Types retrieved" });
//         }
//         else {
//             return res.status(200).json({status: 200, message: e.message })
//         }
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.getCountriesByLanguage = async function (req, res, next) {
//     //logger.info('wordcontroller -- getCountries -- START')
//     try {
//         var countries = await WordService.getCountriesByLanguage(req.headers.token, req.params);
//         //logger.info('wordcontroller -- getCountries -- END')
//         return res.status(200).json({ status: 200, data: countries, message: "Countries for language retrieved" });
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.getAllUnapprovedWords = async function (req, res, next) {
//     try {
//         var words = await WordService.getAllUnapprovedWords(req.headers.token);
//         return res.status(200).json({ status: 200, data: words, message: "All unapproved words retrieved" });
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.getAllWords = async function (req, res, next) {
//     try {
//         var words = await WordService.getAllWords(req.headers.token);
//         return res.status(200).json({ status: 200, data: words, message: "All words retrieved" });
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.addWord = async function (req, res, next) {
//     try {
//         var result = await WordService.addWord(req.headers.token, req.body)
//         console.log("here");
//         return res.status(200).json({ status: 200, data: result.data, message: result.message});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.curateWord = async function (req, res, next) {
//     try {
//         var result = await WordService.curateWord(req.headers.token, req.body);
//         return res.status(200).json({ status: 200, data: result.data, message: result.message});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.approveWord = async function (req, res, next) {
//     try {
//         var result = await WordService.approveWord(req.headers.token, req.body)
//         return res.status(200).json({ status: 200, data: result.data, message: result.message });
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.translate = async function (req, res, next) {
//     try {
//         var result = await WordService.translate(req.headers.token, req.body)
//         return res.status(200).json({ status: 200, data: result, message:"Word translated successfully!!"});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.parseWords = async function (req, res, next) {
//     try {
//         var words = await WordService.parseWords(req.headers.token, req.body)
//         return res.status(200).json({ status: 200, data: words, message:"Words parsed successfully!!"});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.notifyWord = async function (req, res, next) {
//     try {
//         var result = await WordService.notifyWord(req.headers.token, req.body);
//         return res.status(200).json({ status: 200, data: result.data, message: result.message});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.getLangCategories = async function (req, res, next) {
//     var page = req.params.page ? req.params.page : 1;
//     var limit = req.params.limit ? req.params.limit : 10;
//     try {
//         var langCategories = await WordService.getLangCategories(req.params, page, limit);
//         return res.status(200).json({ status: 200, data: langCategories, message: "countries for selected language retrieved successfully!!" });
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.parserOmitWord = async function (req, res, next) {
//     try {
//         var result = await WordService.parserOmitWord(req.headers.token, req.body);
//         return res.status(200).json({ status: 200, data: result.data, message: result.message});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.approvedWords = async function (req, res, next) {
//     try {
//         var result = await WordService.approvedWords(req.headers.token);
//         return res.status(200).json({ status: 200, data: result, message: result.message});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

// exports.deleteWord = async function (req, res, next) {
//     try {
//         var result = await WordService.deleteWord(req.headers.token, req.body);
//         return res.status(200).json({ status: 200, data: result, message: result.message});
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }