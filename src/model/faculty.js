const { Schema, model } = require('mongoose')

const FacultySchema = new Schema({
  name: {
    type: String,
    length: [1-500],
    required: true
  }
})

module.exports = model('Faculty', FacultySchema)