var randomstring = require("randomstring")
var md5          = require('md5')
var Student    = require('../db/schemas/student')
var Validator    = require('../validator')

exports.createStudent = async function (token, data) {
    try {
        var ad = Validator.validate(token, data, ['email', 'password'])
        if ((ad.role == 'Admin') || (ad.role == 'Student')){
            var studentmd = await Student.findOne({email: data.email})
            if(studentmd) {
                throw Error(data.email + ': Student already exists!')
            }
            var newpass = "KiwoaStudent"//randomstring.generate(20)
            var md5pass = md5(newpass)
            var student = await Student.create({name: data.name, email: data.email, role: data.role, password: newpass, }) 
            
            return {data:student, message: "Student has been created with name: " + data.name + "and the password is " + newpass}
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error registering new Student user: ' + e)
    }
}

exports.deleteStudent = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email'])
        if(admin.role != 'Admin') {
            throw new Error("Permission Denied !!")
        }
        await Student.findOneAndUpdate({email: data.email}, {active: false})
        return {message: "deleted the Student with email" + data.email}
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Maybe the Student is active: ' + e)
    }
}

exports.updateStudent = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email']) 
        if((ad.role == 'Admin') || (ad.role == 'Student')) {
            var updated = await Student.findOneAndUpdate({ email: data.email }, data, {new : true})
            if(updated){
                return {message: "Updated all details of student with email" + data.email}
            }
            else{
                return {message: "Student is not registered with us, with this email id: " + data.email}
            }
        }
    } 
     catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error updating Student: ' + e)
    }
}

exports.getStudentByEmail = async function (token, data) {
    try {
        if(Validator.validate(token, data, ['email'])) {
            let students = await Student.find({email: data.email});
            if(students.length > 0) {
                return students
            }
            else {
                throw Error(data.email + ": No Student found.")
            }
        }
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error getting Student by email: ' + e)
    }
}

exports.getAllStudents = async function (token, query) {
    try {
        if(Validator.validatelogin(token)) {
            var student = await Student.find(query)
            return student;
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Student: ' + e)
    }
}

exports.changePasswordStudent = async function (token, data) {
    try {
        var ad = Validator.validate(token, data, ['password', 'newpassword'])
        var student = await Student.findOneAndUpdate({ email : ad.email, password: data.password }, {password : data.newpassword})
        if(student) {
            return {data: student, message: "Succesfully changed password"}
        }
        else {
            return {message: "Student is not registered with us, with this email id: " + data.email}
        }

    } catch (e) {
        throw Error(JSON.stringify(data) + ': Error while changing password: ' + e)
    }
}
