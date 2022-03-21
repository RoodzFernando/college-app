const mongoose = require('mongoose');
const {deptSchema} = require('../model/department');


const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true
    },
    lastName: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true
    },
    date_started: {
      type: Date,
      default: Date.now()
    },
    dept: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['Administrator', 'Student', 'Lecturer'],
      required: true
    }
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;



