// const spawn          = require("child_process").spawn
// var Promise          = require('promise')
// var Word             = require('../db/schemas/student')
// var Admin            = require('../db/schemas/admin')
// var Wrule            = require('../db/schemas/wrule')
// var config           = require('../configs/config')
// var Validator        = require('../validator')

// var categories = []
// this.loadCategories = async function () {
//     await Word.distinct("type", function(error, results){
//         for(var i in results) {
//             types = results[i].split(',')
//             for (var type of types) {
//                 type = type.replace("\\", "").replace("[","").replace("\"","").replace("]","").replace("\"","");
//                 if (!(categories.includes(type))) {
//                     categories.push(type)
//                 }
//             }
//         }
//     })
// }
// this.loadCategories()

// var wordsDB = new Set()
// this.loadWords = async function () {
//     await Word.distinct("word", function(error, results){
//         for(var i in results) {
//             wordsDB.add(results[i])
//         }
//     })
// }
// this.loadWords()

// this.onlyTranslate = function (word, sourcLang, targetLang) {
//     var AWS = require('aws-sdk');
//     AWS.config.update({accessKeyId: config.amazonTranslate.access_key, secretAccessKey: config.amazonTranslate.secret_key, region: config.amazonTranslate.region });
//     var params = {
//         SourceLanguageCode: sourcLang, //ad.locale, /* required */
//         TargetLanguageCode: targetLang, /* required */
//         Text: word, /* required */
//         TerminologyNames: [
//         ]
//     };
//     return new AWS.Translate({apiVersion: '2017-07-01'}).translateText(params).promise();  
// }

// exports.getTypes = async function (token) {
//     //logger.info('wordservice -- getTypes -- START')
//     try {
//         ad = Validator.validatelogin(token)
//         if(ad) {
//             return categories
//         }
//     } catch (e) {
//         throw Error('Error while retrieving types: ' + e)
//     }
// }

// exports.getCountriesByLanguage = async function (token, params) {
//     //logger.info('wordservice -- getCountries -- START')
//     try {
//         if(Validator.validatelogin(token) && params.lang) {
//             return config.languageCountries[params.lang]
//         }
//     } catch (e) {
//         throw Error(data + ': Error while retrieving types: ' + e)
//     }
// }

// exports.getAllUnapprovedWords = async function (token) {
//     try {
//         var jivaUser = Validator.validatelogin(token) 
//         /*
//         if(ad.role != 'Linguists') {
//             console.log(ad.role)
//             throw new Error("Permission Denied!!")
//         }
//         */
//         var words = await Word.find({lang_code: jivaUser.lang_code, approved: false})
//         return words
//     }
//     catch(e){
//         throw Error('Error in getting all unapproved words' + e)
//     }
// }

// exports.approvedWords = async function (token) {
//     try {
//         var jivaUser = Validator.validatelogin(token) 
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied!!")
//         }
//         var words = await Word.find({email: jivaUser.email, approved: true})
//         return {data: words, message: "Words active under current user: " + jivaUser.email}
//     }
//     catch(e){
//         throw Error('Error in getting all approved words' + e)
//     }
// }

// exports.getAllWords = async function (token) {
//     try {
//         var jivaUser = Validator.validatelogin(token) 
//         var words = await Word.find({lang_code: jivaUser.lang_code}) 
//         return words
//     }
//     catch(e){
//         throw Error('Error in getting all words' + e)
//     }
// }

// exports.curateWord = async function (token, data) {
//     try {
//         var jivaUser = Validator.validate(token, data, ['word', 'types', "country_codes"])
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied!!")
//         }
//         var found = await Word.findOne({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}) 
//         if(!found) {
//             var word = await Word.create({type: data.types, word: data.word, creator: jivaUser.email, email: jivaUser.email, lang_code: jivaUser.lang_code, country_code: data.country_codes, approved: false}) 
//             wordsDB.add(data.word) 
//             return {data: data.word, message: "Word has been succesfully curated"}
//         }
//         else {
//             if(found.approved == false) {
//                 var flag_country = false
//                 var c_codes = new Set(found.country_code)
//                 for(c of data.country_codes) {
//                     if(!c_codes.has(c)) {
//                         flag_country = true
//                         c_codes.add(c)
//                     }
//                 }
//                 var flag_types = false
//                 var types = new Set(found.type)
//                 for(t of data.types) {
//                     if(!types.has(t)) {
//                         flag_types = true
//                         types.add(t)
//                     }
//                 }
//                 var word = {}
//                 if(flag_country){
//                     c_codes = Array.from(c_codes)
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {country_code: c_codes})
//                 }
//                 if(flag_types) {
//                     types = Array.from(types)
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email , lang_code: jivaUser.lang_code}, {type: types})
//                 }
//                 if ((!flag_types) && (!flag_country)) {

//                     return {message: "Curate Word is already existing"}
//                 }
//                 else {
//                     return {data: word, message: "Curate word has been updated!!"}
//                 }
//             }
//             else {
//                 return {message: "Curate Word is already existing"}
//             }
//         }
//     }
//     catch(e) {
//         throw Error(JSON.stringify(data) + ': Error while curating word: ' + e)
//     }
// }

// exports.approveWord = async function (token, data) {
//     try {
//         var jivaUser = Validator.validate(token, data, ["word"])
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied !!")
//         }
//         var word = await Word.findOneAndUpdate({creator: jivaUser.email, word: data.word}, {approved: true, email: jivaUser.email})
//         if(word) {
//             return {data: word, message: "Word approved"}
//         }
//         else {
//             return {data: word, message: "No unapproved word found for " + jivaUser.email}
//         }
//     } catch (e) {
//         // Log Errors
//         throw Error(JSON.stringify(data) + ': Error deleting Admin: ' + e)
//     }
// }

// exports.addWord = async function (token, data) {
//     try{
//         var jivaUser = Validator.validate(token, data, ['word', 'types', "country_codes"])
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied!!")
//         }
//         var results = []
//         var found = await Word.findOne({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}) 
//         if(!found) {
//             var word = await Word.create({type: data.types, word: data.word, creator: jivaUser.email, email: jivaUser.email, lang_code: jivaUser.lang_code, country_code: data.country_codes, approved: true}) 
//             wordsDB.add(data.word) 
//             return {data: word, type: data.types, message: "Word has been succesfully added"}
//         }
//         else {
//             if (found.approved == true) {
//                 var flag_country = false
//                 var c_codes = new Set(found.country_code)
//                 for(c of data.country_codes) {
//                     if(!c_codes.has(c)) {
//                         flag_country = true
//                         c_codes.add(c)
//                     }
//                 }
//                 var flag_types = false
//                 var types = new Set(found.type)
//                 for(t of data.types) {
//                     if(!types.has(t)) {
//                         flag_types = true
//                         types.add(t)
//                     }
//                 }
//                 var word = {}
//                 if(flag_country){
//                     c_codes = Array.from(c_codes)
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {country_code: c_codes})
//                 }
//                 if(flag_types) {
//                     types = Array.from(types)
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {type: types})
//                 }
//                 if (!flag_types && !flag_country) {
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {approved: true})
//                     return {data: word, message: "Word is already existing but it is approved!!"}
//                 }
//                 else {
//                     return {data: word, message: "Word details updated!!"}
//                 }
//             }
//             else {
//                 var flag_country = false
//                 var c_codes = new Set(found.country_code)
//                 for(c of data.country_codes) {
//                     if(!c_codes.has(c)) {
//                         flag_country = true
//                         c_codes.add(c)
//                     }
//                 }
//                 var flag_types = false
//                 var types = new Set(found.type)
//                 for(t of data.types) {
//                     if(!types.has(t)) {
//                         flag_types = true
//                         types.add(t)
//                     }
//                 }
//                 var word = {}
//                 if(flag_country){
//                     c_codes = Array.from(c_codes)
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {country_code: c_codes, approved: true})
//                 }
//                 if(flag_types) {
//                     types = Array.from(types)
//                     word = await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {type: types, approved: true})
//                 }
//                 if (!flag_types && !flag_country) {
//                     await Word.findOneAndUpdate({word: data.word, creator: jivaUser.email, lang_code: jivaUser.lang_code}, {approved: true})
//                     return {data: word, message: "Word is already existing and it has been approved!!"}
//                 }
//                 else {
//                     return {data: word, message: "Word details updated and added Succesfully!!"}
//                 }
//             }
//         }
//     }
//     catch(e) {
//         throw Error(JSON.stringify(data) + ': Error while adding word: ' + e)
//     }
// }

// exports.translate = async function (token, data) {
//     try{
//         var ad = Validator.validate(token, data, ['word', 'type', "origin", "target"])
//         if(ad.role != 'Linguists') {
//             throw new Error("Permission Denied!!")
//         }
//         if(ad) {
//             var AWS = require('aws-sdk');
//             AWS.config.update({accessKeyId: config.amazonTranslate.access_key, secretAccessKey: config.amazonTranslate.secret_key, region: config.amazonTranslate.region });

//             var params = {
//                 SourceLanguageCode: data.origin, //ad.locale, /* required */
//                 TargetLanguageCode: data.target, /* required */
//                 Text: data.word, /* required */
//                 TerminologyNames: [
//                 ]
//               };

//             translatedWord = new AWS.Translate({apiVersion: '2017-07-01'}).translateText(params).promise();
//             translatedWord.then(function(result) {
//                 //console.log(result.TranslatedText)
//                 //console.log(result)
//             })
//             return translatedWord
//         }
//     } catch (e) {
//         console.error(e)
//         throw Error(JSON.stringify(data) + ': Error while translating word: ' + e)
//     }
// }

// getPromise = function(role, url, ruleArray, min, max) {
//     return new Promise(function(resolve,reject) {
//         try {
//             if(role == "Linguists") {
//                 const pythonProcess = spawn(config.pythonPath, ["./scripts/liguistsic.py", url, ruleArray, min, max]);
//                 var result = ""
//                 pythonProcess.stdout.on('data', (chunk) => {
//                     result += chunk.toString(encoding = "latin1")
//                     resolve(result)
//                 })
//                 pythonProcess.stderr.on('data', (data) => {
//                     reject("Please try again, something has gone wrong!")
//                 });
//             }
//             else {
//                 reject("You are not authorized to do this")
//             }
//         } catch(e) {
//             reject("Please try again, something has gone wrong!!" + e)
//             throw Error(JSON.stringify(data) + ': Error while using python: ' + e)
//         }
//     })
// }

// exports.parseWords = async function (token, data) {
//     try {
//         var parseWords = []
//         var user = Validator.validate(token, data, ['url']) 
//         var wordRule = await Wrule.findOne({lang_code: user.lang_code})
//         var strWords = getPromise(user.role, data.url, wordRule.xwords, wordRule.minlen, wordRule.maxlen).then(
//             result => {
//                 result = result.split(",")
//                 for(word of result) {
//                     word = word.replace("\'","").replace("\'","").replace("[","").replace("]","").replace(" ","").replace("\r\n","")
//                     if(!wordsDB.has(word)){
//                         parseWords.push(word)
//                     }
//                 }
//                 return parseWords
//             }
//         ).catch(
//             err => {
//                 return err.toString()
//             }
//         )
//         // filter logic here
//         return strWords
//     } catch (e) {
//         // Log Errors
//         throw Error(JSON.stringify(data) + ': Error parsing words from URL: ' + e)
//     }
// }

// exports.notifyWord = async function (token, data) {
//     try{
//         var translatedType = ""
//         var translatedWord = ""
//         var jivaUser = Validator.validate(token, data, ['types', 'word'])
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied!!")
//         }
//         var found = await Word.findOne({word: data.word, lang_code: jivaUser.lang_code}) 
//         if(!found) {
//             translated_types = []
//             await Word.create({type: data.types, word: data.word, creator: jivaUser.email, email: jivaUser.email, lang_code: jivaUser.lang_code, country_code: data.country_code, approved: true})
//             wordsDB.add(data.word)
//             var linguaAdmins = await Admin.find({role: "Linguists"})
//             for (var LA of linguaAdmins) {
//                 //var TWord = ""
//                 if (LA.email == jivaUser.email){ continue; }
//                 if ((LA.active == true) && (LA.lang_code != jivaUser.lang_code)){
//                     await this.onlyTranslate(data.word, jivaUser.lang_code, LA.lang_code).then(function (res, rej){
//                         translatedWord = res.TranslatedText
//                     })
//                     for (type of data.types) {
//                         await this.onlyTranslate(type, jivaUser.lang_code, LA.lang_code).then(function (res, rej){
//                         translatedType = res.TranslatedText
//                         translated_types.push(translatedType)
//                         })
//                     }
//                     Word.create({type: translated_types, word: translatedWord, creator: LA.email, email: jivaUser.email, lang_code: LA.lang_code, approved: false}) 
//                     translated_types = []
//                 }
//                 LA = {}
//             }
//             return {message: "Word has been successfully notified to all other Lingua!!"}
//         }
//         else {
//             return {message: "Notified word already exists!!"}
//         }
//     }
//     catch(e) { 
//         throw Error(JSON.stringify(data) + ': Error while notifying word: ' + e)
//     }
// }

// exports.parserOmitWord = async function (token, data) {
//     try {
//         var XWords = []
//         var jivaUser = Validator.validate(token, data, ["omitword"])
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied !!")
//         }
//         var wordRule = await Wrule.findOne({lang_code: jivaUser.lang_code})
//         XWords = wordRule.xwords
//         if (!(XWords.includes(data.omitword))) {
//             XWords.push(data.omitword)
//             wordsDB.delete(data.omitword)
//         }
//         wordRule = await Wrule.findOneAndUpdate({lang_code: jivaUser.lang_code}, {xwords: XWords})
//         return {data: wordRule, message: "Xwrords have have been updated for language code: " + jivaUser.lang_code}
//     } catch (e) {
//         // Log Errors
//         throw Error('Error updating xwords !!' + e)
//     }
// }

// exports.deleteWord = async function (token, data) {
//     try {
//         var jivaUser = Validator.validate(token, data, ["delword"])
//         if(jivaUser.role != 'Linguists') {
//             throw new Error("Permission Denied !!")
//         }
//         var word = await Word.find({word: data.delword, creator: jivaUser.email, lang_code: jivaUser.lang_code})
//         if (word[0].approved == false) {
//             await Word.remove({word: data.delword, creator: jivaUser.email, lang_code: jivaUser.lang_code})
//             return {message: data.delword + " has been successfully deleted from database!!"}
//         }
//         else{
//             return {message:"Word has been accepted already!!"}
//         }
//     } catch (e) {
//         // Log Errors
//         throw Error('Error updating xwords !!' + e)
//     }
// }
