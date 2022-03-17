const mongoose = require('mongoose');
// const FacultySchema = require('./faculty')
const Joi = require('joi');
// const print = require('../../utils')
const {Faculty, FacultySchema} = require('./faculty');
const { string } = require('joi');

const deptSchema = new mongoose.Schema({
    name: {
      type: String,
      length: [1-500],
      required: true
    },
    description: {
      type: String,
      length: [5-5000],
    },
    faculty: FacultySchema
});

const validateDepartment = (department) => {
  const schema = Joi.object({
     name: Joi.string().min(1).max(500).required(),
     description: Joi.string().min(5).max(5000),
    }
  )
  return schema.validate(department)

}

const department = mongoose.model('Department', deptSchema);

const createDept = async () => {
  const chemistry = new department({
    name: 'Chemistry',
    description: 'Chemistry Department',
    faculty: {
      name: 'Sciences'
    }
  })
  validateDepartment(chemistry);
  print(chemistry);
  const res = await chemistry.save();
  print(res);
}

// createDept();


// module.exports = department;
// module.exports = validateDepartment;
// module.exports = createDept
module.exports = {
  department,
  validateDepartment,
  createDept,
  deptSchema
}
