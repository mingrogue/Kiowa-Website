var Role             = require('../db/schemas/role')
var AdminUser        = require('../db/schemas/admin')
var Validator        = require('../validator')

exports.getAllRoles = async function (query) {
    try {
        var allroles = await Role.find(query, { "_id": 0, "rolename" : 1 })
        var roles = []
        for (i in allroles) {
            roles.push(allroles[i].rolename)
        }
        //console.log(JSON.stringify(roles))
        return roles
    }
    catch(e){
        throw Error('Error in getting all roles: ' + e)
    }
}

exports.updateRole = async function (token, data) {
    try {
        var jivaUser = Validator.validate(token, data, ["email", "rolename"])
        if(jivaUser.role != 'Admin') {
            throw new Error("Permission Denied!!")
        }

        var user = await AdminUser.findOneAndUpdate({"email": data.email}, {"role": data.rolename})
        if(!user) {
            throw Error(data.email + ": No User found.")
        } 
        //console.log(user)
        return user
    }
    catch(e){
        throw Error('Error in updating role: ' + e)
    }
}
