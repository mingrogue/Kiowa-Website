var randomstring = require("randomstring")
var md5          = require('md5')
var Admin    = require('../db/schemas/admin')
var Validator    = require('../validator')
var Course    = require('../db/schemas/course')
var Event    = require('../db/schemas/event')


exports.login = async function (data) {
    try {
        if(Validator.validateparams(data, ['email', 'password', 'role'])) {
            if (data.role == 'Admin'){
                var admin = await Admin.findOne( {email: data.email, password: data.password, active: true} );
                console.log(admin);
                
                if(admin) {
                    var token = randomstring.generate(32)
                    //console.log("Token:" + token)
                    Validator.loggedUsers[token] = admin
                    return {data: admin, message: token}
                }
                return {message: data.email + ": invalid credentials"};
            }
            else if(data.role == 'Student'){
                var admin = await Admin.findOne( {email: data.email, password: data.password, active: true} );
                if(admin) {
                    var token = randomstring.generate(32)
                    //console.log("Token:" + token)
                    Validator.loggedUsers[token] = student
                    return {data: student, message: token}
                }
                return {message: data.email + ": invalid credentials"};
            }
            else if(data.role == 'Teacher'){
                var admin = await Admin.findOne( {email: data.email, password: data.password, active: true} );
                if(admin) {
                    var token = randomstring.generate(32)
                    //console.log("Token:" + token)
                    Validator.loggedUsers[token] = teacher
                    return {data: teacher, message: token}
                }
                return {message: data.email + ": invalid credentials"};
            }
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error in login: ' + e)
    }
}

exports.logout = async function (token, data) {
    try {
        var user = Validator.validatelogin(token)
        if(user) {
            delete Validator.loggedUsers[token]
            return {data: true, message: "Successfully logged out!"}
        }
        else {
            return {data: false, message: "User not logged in!"}
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error in logging out ' + e)
    }
}

exports.validatelogin = function (token) {
    var ad = this.loggedUsers[token]
    if(!ad) {
        throw Error ("User not logged in");
    }
    return ad
}

var Events = []
this.loadEvents = async function () {
    await Event.distinct("type", function(error, results){
        console.log(results);
        for(var i in results) {
            types = results[i].split(',')
            for (var type of types) {
                type = type.replace("\\", "").replace("[","").replace("\"","").replace("]","").replace("\"","");
                if (!(Events.includes(type))) {
                    Events.push(type)
                }
            }
        }
    })
}
this.loadEvents()

var Courses = []
this.loadCourses = async function () {
    await Course.distinct("type", function(error, results){
        console.log(results);
        for(var i in results) {
            types = results[i].split(',')
            for (var type of types) {
                type = type.replace("\\", "").replace("[","").replace("\"","").replace("]","").replace("\"","");
                if (!(Courses.includes(type))) {
                    Courses.push(type)
                }
            }
        }
    })
}
this.loadCourses()
