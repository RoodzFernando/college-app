const express = require('express');
const { Faculty } = require('../model/faculty');

const route = express.Router();

// Create Faculty
route.post('/', async (req, res) => {
  try {
    const faculty = new Faculty({
      ...req.body,
    });
    await faculty.save();
    res.send(faculty);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Show Faculties

// Show a Faculty

// Update a Faculty

// Delete a Faculty

module.exports = route;
