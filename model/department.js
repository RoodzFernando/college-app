const mongoose = require('mongoose');
const {
  FacultySchema
} = require('./faculty');

const deptSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 500,
    required: true
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 500
  },
  faculty: {
    type: FacultySchema,
    required: true
  }
});


const Department = mongoose.model('Department', deptSchema);

module.exports = Department