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

module.exports = Course;