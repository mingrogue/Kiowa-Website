var mongoose = require('mongoose')
//require('mongoose-double')(mongoose)


const CourseSchema  = new mongoose.Schema({
    name: String,
    description: String,
    code: Number,
    active: {
        type: Boolean, default: true
    },
    created_on: { type: Date, default: Date.now }
})

const Course = mongoose.model('course', CourseSchema)

/**
 * @swagger
 * definitions:
 *   Course:
 *     type: object
 *     properties:
 *       name:
 *         description: name of the course
 *         type: string
 *       description:
 *         description: description of the course
 *         type: string
 *       code:
 *         description: code given to the course
 *         type: number
 *       active:
 *         description: used to determine if the user is active of not
 *         type: boolean
 */

module.exports = Course;