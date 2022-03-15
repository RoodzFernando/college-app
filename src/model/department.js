const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
    name: {
      type: String,
      length: [1-500],
      required: true
    },
    description: {
      type: String,
      length: [1-5000],
    },
    faculty :  new mongoose.Schema({
      name: {
      type: String,
      length: [1-500],
      required: true
    }
  }),
});

const department = mongoose.model('Department', deptSchema);

module.exports = department;
