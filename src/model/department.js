const mongoose = require('mongoose');
const Faculty = require('./faculty')

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
    faculty :  Faculty
});

const department = mongoose.model('Department', deptSchema);

module.exports = department;
