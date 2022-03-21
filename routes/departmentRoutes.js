const express = require('express');
const { Department } = require('../model/department');
const { Faculty } = require('../model/faculty');

const route = express.Router();

// Create Department
route.post('/', async (req, res) => {
  try {
    const faculty = await Faculty.findOne({ name: req.body.faculty });
    if (!faculty)
      return res.status(404).send({ message: 'Faculty not available' });
    const department = new Department({
      ...req.body,
      faculty,
    });
    await department.save();
    res.send(department);
  } catch (error) {
    res.status(400).send(error);
  }
});
// Show Departments
route.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.send(departments);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Show a Department
route.get('/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    res.send(department);
  } catch (error) {
    res.status(400).send(error);
  }
});
// Update a Department
route.patch('/:id', async (req, res) => {
  const reqBody = Object.keys(req.body);
  let faculty;
  try {
    if (reqBody.includes('faculty')) {
      faculty = await Faculty.findOne({ name: req.body.faculty });
    }
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      { ...req.body, faculty },
      { new: true }
    );
    res.send(department);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
// Delete a Department
route.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    res.send(department);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = route;
