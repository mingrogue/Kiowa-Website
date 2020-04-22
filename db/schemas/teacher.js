var mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    description: String, 
    cources: [String],
    studentsAssigned: [Number],
    password: String,
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

module.exports = Teacher;