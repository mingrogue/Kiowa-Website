var mongoose = require('mongoose')
require('mongoose-double')(mongoose)


const RoleSchema  = new mongoose.Schema({
    rolename: {
        type: String,
        enum : ['Student','Teacher','Admin']
    },
    studenttablereadaccess: {
        type: Boolean, default:false
    },
    studenttablewriteaccess: {
        type: Boolean, default:false
    },
    studentdeleteaccess: {
        type: Boolean, default:false
    },
    
    teachertablereadaccess: {
        type: Boolean, default:false
    },
    teachertablewriteaccess: {
        type: Boolean, default:false
    },
    teacherdeleteaccess: {
        type: Boolean, default:false
    },
    coursetablereadaccess: {
        type: Boolean, default:true
    },
    coursetablewriteaccess: {
        type: Boolean, default:false
    },
    coursedeleteaccess: {
        type: Boolean, default:false
    }
})

const Role = mongoose.model('role', RoleSchema)

module.exports = Role;
