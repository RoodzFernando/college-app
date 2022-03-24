const mongoose = require('mongoose');
const { deptSchema } = require('../model/department');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    validate (value) {
      if (!validator.isEmail(value)) throw new Error('Email is invalid.')
    },
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  lastName: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true,
  },
  date_started: {
    type: Date,
    default: Date.now(),
  },
  dept: {
    type: deptSchema,
    required: true,
  },
  role: {
    type: String,
    enum: ['Administrator', 'Student', 'Lecturer'],
    required: true,
  },
});

userSchema.pre('save', function () {
  const user = this
  user.password = bcrypt.hashSync(user.password, salt)
  console.log(user.password)
})

const User = mongoose.model('User', userSchema);

module.exports ={
  User
}
