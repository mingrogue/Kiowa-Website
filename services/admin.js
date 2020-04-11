var randomstring = require("randomstring")
var md5          = require('md5')
var Admin    = require('../db/schemas/admin')
var Validator    = require('../validator')

exports.createAdmin = async function (token, data) {
    try {
        var ad = Validator.validate(token, data, ['email', 'password'])
        if(ad.role != 'Admin') {
            throw new Error("Permission Denied !!")
        } 
        var adminmd = await Admin.findOne({email: data.email})
        if(adminmd) {
            throw Error(data.email + ': Admin user already exists!')
        }
        var newpass = "KiwoaAdmin"//randomstring.generate(20)
        var md5pass = md5(newpass)
        var admin = await Admin.create({firstname: data.firstname, lastname: data.lastname, email: data.email, role: data.role, password: newpass}) 
        
        return {body:admin, message: data.MessageId}
        
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error registering new Admin user: ' + e)
    }
}

exports.deleteAdmin = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email'])
        if(admin.role != 'Admin') {
            throw new Error("Permission Denied !!")
        }
        await Admin.findOneAndUpdate({email: data.email}, {active: false})
        return {message: "deleted the admin with email" + data.email}
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Maybe the admin is active: ' + e)
    }
}

exports.activateAdmin = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email'])
        if(admin.role != 'Admin') {
            throw new Error("Permission Denied !!")
        }
        await Admin.findOneAndUpdate({email: data.email}, {active: true})
        return {message: "activated the admin with email" + data.email}
    } catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Maybe the admin is active: ' + e)
    }
}

exports.updateAdmin = async function (token, data) {
    try {
        var admin = Validator.validate(token, data, ['email']) 
        if(admin.role != 'Admin') {
            throw new Error("Permission Denied !!")
        }

        var updated = await Admin.findOneAndUpdate({ email: data.email }, data, {new : true})
        if(updated){
            return {message: "Updated all details of " + data.email}
        }
        else{
            return {message: "User is not registered with us, with this email id: " + data.email}
        }
    } 
     catch (e) {
        // Log Errors
        throw Error(JSON.stringify(data) + ': Error updating Admin user: ' + e)
    }
}

exports.getAdminByEmail = async function (token, data) {
    try {
        if(Validator.validate(token, data, ['email'])) {
            let admins = await Admin.find({email: data.email});
            if(admins.length > 0) {
                return admins
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

exports.getAllAdmins = async function (token, query) {
    try {
        console.log("Calling getAllAdminUsers ......")
        if(Validator.validatelogin(token)) {
            var admin = await Admin.find(query)
            return admin;
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Admins: ' + e)
    }
}

exports.changePasswordAdmin = async function (token, data) {
    try {
        var ad = Validator.validate(token, data, ['password', 'newpassword'])
        var admin = await Admin.findOneAndUpdate({ email : ad.email, password: data.password }, {password : data.newpassword})
        if(admin) {
            return {data: admin, message: "Succesfully changed password"}
        }
        else {
            return {message: "User is not registered with us, with this email id: " + data.email}
        }

    } catch (e) {
        throw Error(JSON.stringify(data) + ': Error while changing password: ' + e)
    }
}
