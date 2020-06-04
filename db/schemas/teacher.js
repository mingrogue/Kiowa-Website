var mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    description: String, 
    cources: Array,
    role: {
        type: String,
        default : 'Teacher'
    },
    active: {
        type: Boolean, default: false
    },
    joined_on: { type: Date, default: Date.now }
})

const Teacher = mongoose.model('teacher', TeacherSchema)

/**
 * @swagger
 * definitions:
 *   Teacher:
 *     type: object
 *     properties:
 *       name:
 *         description: name of the teacher user
 *         type: string
 *       email:
 *         description: email of the teacher user
 *         type: string
 *       password:
 *         description: password
 *         type: string
 *       description:
 *         description: teacher's description
 *         type: array
 *         items:
 *           type: string
 *       cources:
 *         description: coursecodes assigned to the teacher
 *         type: array
 *         items:
 *           type: string
 *       role:
 *         description: parent of the teacher
 *         type: string
 *       active:
 *         description: used to determine if the user is active of not
 *         type: string
 */

module.exports = Teacher;