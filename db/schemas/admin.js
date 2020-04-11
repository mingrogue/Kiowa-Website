var mongoose = require('mongoose')
//require('mongoose-double')(mongoose)


const AdminUserSchema  = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    role: {
        type: String,
        default : 'Admin'
    },
    active: {
        type: Boolean, default: true
    },
    joined_on: { type: Date, default: Date.now }
})

const AdminUser = mongoose.model('admin', AdminUserSchema)

module.exports = AdminUser;
