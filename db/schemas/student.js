var mongoose = require('mongoose')

const StudentSchema  = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    teacher: Array,
    coursecode: Array,
    parent: String,
    exam: Array,
    school: String,
    role: {
        type: String,
        default : 'Student'
    },
    active: {
        type: Boolean, default: false
    },
    joined_on: { type: Date, default: Date.now }
})

const Student = mongoose.model('student', StudentSchema)

/**
 * @swagger
 * definitions:
 *   Student:
 *     type: object
 *     properties:
 *       name:
 *         description: name of the student user
 *         type: string
 *       email:
 *         description: email of the student user
 *         type: string
 *       password:
 *         description: password
 *         type: string
 *       teacher:
 *         description: teachers assigned to the student user
 *         type: array
 *         items:
 *           type: string
 *       coursecode:
 *         description: coursecodes assigned to the student
 *         type: array
 *         items:
 *           type: string
 *       parent:
 *         description: parent of the student
 *         type: string
 *       exam:
 *         description: exams student is appearing for
 *         type: array
 *         items:
 *           type: string
 *       school:
 *         description: school of the student
 *         type: string
 *       role:
 *         description: role
 *         type: string
 *       active:
 *         description: used to determine if the user is active of not
 *         type: boolean
 */

module.exports = Student
