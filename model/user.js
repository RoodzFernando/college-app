const mongoose = require('mongoose');
const Joi = require('joi');
const { deptSchema } = require('../model/department');
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')

const validate = user => {
  const schema = Joi.object({
      firstName: Joi.string().min(1).max(50).required(),
      lastName: Joi.string().min(1).max(50).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      date_started: Joi.date(),
      role: Joi.string().required(),
      dept: Joi.string().required()
  })
  return schema.validate(user)
}
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
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
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

userSchema.methods.generateToken = function () {
  const user = this
  const token = jwt.sign({ id: user._id }, process.env.SECRETKEY);
  return token
}

userSchema.pre('save', function () {
  const user = this
  user.password = bcrypt.hashSync(user.password, salt)
  console.log(user.password)
})

const User = mongoose.model('User', userSchema);

module.exports ={
  User,
  validate
}
