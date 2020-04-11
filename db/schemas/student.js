var mongoose = require('mongoose')

const StudentSchema  = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    teacher: [String],
    coursecode: [Number],
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

module.exports = Student
