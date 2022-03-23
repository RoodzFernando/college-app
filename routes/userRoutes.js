const express = require('express');
const User = require('../model/user');
const { Department } = require('../model/department');
const route = express.Router();
const print = require('../utils');
const validate = require('../model/user')

// Create User
route.post('/', async (req, res) => {
  const { dept } = req.body;
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].messages)

    try {
      const deptObj = await Department.findOne({ name: dept });
      const user = new User({
        ...req.body,
        dept: deptObj,
      });
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }

});
// Show Users
route.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Show a User

route.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).send({'message': 'User does not exist'})
    res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Update a User

route.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete a User

route.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Authenticating a User

route.post('/auth', (req, res) => {

})

module.exports = route;
