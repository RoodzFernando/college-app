const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 500,
    required: true,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 500,
  },
});
const Faculty = mongoose.model('Faculty', FacultySchema);

module.exports = { Faculty, FacultySchema };
