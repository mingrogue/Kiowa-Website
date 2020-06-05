var mongoose = require('mongoose')
require('mongoose-double')(mongoose)


const FileSchema  = new mongoose.Schema({
    courseId: String,
    creator: String,
    description: String,
    title: String,
    fileLocation: String,
    created_on: { type: Date, default: Date.now }
})

const File = mongoose.model('file', FileSchema)

module.exports = File;
