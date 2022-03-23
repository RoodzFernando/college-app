const mongoose = require('mongoose');
const Joi = require('joi');
const { deptSchema } = require('../model/department');
const validate = user => {
  const schema = Joi.Schema({
    schema: Joi.object({
      firstName: Joi.string().min(1).max(50).required(),
      lastName: Joi.string().min(1).max(50).required(),
      email: Joi.string().email().unique().required(),
      date_started: Joi.date(),
      role: Joi.string().required(),
      dept: Joi.string().required
    })
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

const User = mongoose.model('User', userSchema);

module.exports = User;
module.exports = validate
