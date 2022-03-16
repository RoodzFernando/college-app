const mongoose = require('mongoose')

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    length: [1-500],
    required: true
  }
})
const faculty = mongoose.model('Faculty', FacultySchema)

exports.FacultySchema = FacultySchema