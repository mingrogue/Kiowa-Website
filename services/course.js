var Course                = require('../db/schemas/course')
var Validator            = require('../validator')

exports.createCourse = async function (token, data) {
    try {
            var admin = Validator.validate(token, data, ['name', 'description', 'code'])
            //console.log(ad.role)
            if(admin.role != 'Admin') {
                throw new Error("Permission Denied!!")
            }
            var found = await Course.findOne({code: data.code}) 
            if(!found) {
                var course = await Course.create({name: data.name, description: data.description, code: data.code}) 
                return {data: course, message: "Course has been succesfully created"}
            }
            else {
                return {message: "Course already exists" }
            }
        }
        catch(e){
            //console.error(e)
            throw Error('Error in creating Courses: ' + e)
    }
}

exports.updateCourse = async function (token, data) {
    try {
            var admin = Validator.validate(token, data, ['name', 'description', 'code'])
            //console.log(ad.role)
            if(admin.role != 'Admin') {
                throw new Error("Permission Denied!!")
            }
            var found = await Course.findOne({code: data.code}) 
            if(!found) {
                var course = await Course.findOneAndUpdate({ code: data.code }, data, {new : true}) 
                return {data: course, message: "Course has been succesfully created"}
            }
            else {
                return {message: "Course already exists" }
            }
        }
        catch(e){
            //console.error(e)
            throw Error('Error in creating Courses: ' + e)
    }
}

exports.deleteCourse = async function (token, data) {
    try {
            var admin = Validator.validate(token, data, ['code'])
            //console.log(ad.role)
            if(admin.role != 'Admin') {
                throw new Error("Permission Denied!!")
            }
            var found = await Course.findOne({code: data.code}) 
            if(!found) {
                var course = await Course.findOneAndUpdate({code: data.code}, {active: false}) 
                return {data: course, message: "Course has been succesfully deleted"}
            }
            else {
                return {message: "Course already exists" }
            }
        }
        catch(e){
            //console.error(e)
            throw Error('Error in creating courses: ' + e)
    }
}


exports.getAllCourses = async function (token, query) {
    try {
        if(Validator.validatelogin(token)) {
            var courses = await Course.find(query)
            return courses;
        } 
    }catch (e) {
        // Log Errors
        throw Error('Error while retrieving courses: ' + e)
    }
}

exports.getCourseByCode = async function (token, data) {
    try {
        if(Validator.validate(token, data, ['code'])) {
            let course = await Course.find({code: data.code});
            if(course.length > 0) {
                return course
            }
            else {
                throw Error(data.email + ": No User found.")
            }
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error getting user by email: ' + e)
    }
}