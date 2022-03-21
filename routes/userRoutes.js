const express = require('express')
const User = require('../model/user')
const {Department} = require('../model/department')
const route = express.Router()
const print = require('../utils')

// Create User
route.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    date_started,
    dept,
    role
  } = req.body

  try {
    const deptObj = await Department.findOne({name: dept})
    const user = new User({
      ...req.body,
      dept: deptObj
    })
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})
// Show Users

// Show a User

// Update a User

// Delete a User

module.exports = route