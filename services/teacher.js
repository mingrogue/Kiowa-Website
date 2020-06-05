var randomstring = require("randomstring")
var md5          = require('md5')
var Teacher    = require('../db/schemas/teacher')
var Validator    = require('../validator')

exports.createTeacher = async function (token, data) {
    try {
        var ad = Validator.validate(token, data, ['email', 'password'])
        if ((ad.role == 'Admin')){
        var teachermd = await Teacher.findOne({email: data.email})
            if(teachermd) {
                throw Error(data.email + ': Teacher already exists!')
            }
            var newpass = "KiwoaTeacher"//randomstring.generate(20)
            var md5pass = md5(newpass)
            var teacher = await Teacher.create({name: data.name, email: data.email, role: data.role, password: newpass, description: data.description}) 
            
            return {body:teacher, message: "Student has been created with credentials: " + JSON.stringify(data)}
        }  
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error registering new Admin user: ' + e)
    }
}

exports.deleteTeacher = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email'])
        if(admin.role != 'Admin') {
            throw new Error("Permission Denied !!")
        }
        await Teacher.findOneAndUpdate({email: data.email}, {active: false})
        return {message: "deleted the admin with email" + data.email}
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Maybe the admin is active: ' + e)
    }
}

exports.updateTeacher = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email']) 
        if(admin.role != 'Admin') {
            throw new Error("Permission Denied !!")
        }

        var updated = await Teacher.findOneAndUpdate({ email: data.email }, data, {new : true})
        if(updated){
            return {message: "Updated all details of teacher with new details : " + JSON.stringify(updated)}
        }
        else{
            return {message: "Teacher is not registered with us, with this email id: " + data.email}
        }
    } 
     catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error updating Admin user: ' + e)
    }
}

exports.getTeacherByEmail = async function (token, data) {
    try {
        if(Validator.validate(token, data, ['email'])) {
            let teachers = await Teacher.find({email: data.email});
            if(teachers.length > 0) {
                return teachers
            }
            else {
                throw Error(data.email + ": No Teacher found.")
            }
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error getting Teacher by email: ' + e)
    }
}

exports.getAllTeachers = async function (token, query) {
    try {
        if(Validator.validate(token)) {
            var teachers = await Teacher.find(query)
            return teachers;
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Teachers : ' + e)
    }
}

exports.changePasswordTeacher = async function (token, data) {
    try {
        var ad = Validator.validate(token, data, ['password', 'newpassword'])
        var teacher = await Teacher.findOneAndUpdate({ email : ad.email, password: data.password }, {password : data.newpassword})
        if(teacher) {
            return {data: teacher, message: "Succesfully changed password"}
        }
        else {
            return {message: "Teacher is not registered with us, with this email id: " + data.email}
        }

    } catch (e) {
        throw Error(JSON.stringify(data) + ': Error while changing password: ' + e)
    }
}
