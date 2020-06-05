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

/**
 * @swagger
 * definitions:
 *   Admin:
 *     type: object
 *     properties:
 *       email:
 *         description: used for identification
 *         type: string
 *       password:
 *         type: string
 *       firstname:
 *         description: first name of admin user
 *         type: number
 *       lastname:
 *         description: last name of admin user
 *         type: object
 *       active:
 *         description: used to determine if the user is active of not
 *         type: boolean
 */

module.exports = AdminUser;
