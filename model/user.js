const mongoose = require('mongoose');
const {deptSchema} = require('./department');


const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      length: [1, 50],
      required: true
    },
    lastName: {
      type: String,
      length: [1, 50],
      required: true
    },
    date_started: {
      type: Date,
      required: true
    },
    dept: {
      type: deptSchema,
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



