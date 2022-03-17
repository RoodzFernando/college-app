require('dotenv').config()
const { connect, connection } = require('mongoose')
const print = require('./utils')
const { department } = require('./model/department')
const Faculty = require('./model/faculty')
const User = require('./model/user')

const databaseURL = process.env.URL
connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = connection
db.on('error', console.error.bind('MongoDB connection error!'))

const createUser = user => {
  const {firstName, lastName, date_started, dept, role} = user
  const newUser = new User({
    ...user,
    dept: new department({
      ...dept
    })
  })
  newUser.save((err, data) => {
    if (err) return print('Error: ' + err)
    // data.dept.save((err, innerData) => {
    //   if (err) return print('Error: ' + err)
    //   print(innerData)
    // })
    console.log('Data Saved ' + data)
  })

  // newUser.dept.save()
}

createUser({
  firstName: 'Roodz Fernando',
  lastName: 'Fleurant',
  date_started: Date.now(),
  dept: {name: 'Sciences', description: 'Sciences Dpt', faculty: 'Sciences'},
  role: 'Student'
})
