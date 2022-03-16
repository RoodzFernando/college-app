const express = require('express')
const port = process.env.PORT || 3000
const print = require('../utils')
const mongoose = require('mongoose');
const { department, createDept } = require('./model/department')

main().catch((err) => print(`${err.message} -- unable to connect to MongoDb at this time.`))

async function main(){
 await mongoose.connect('mongodb://localhost:27017/collegeDb');
 print('connected to MongoDb');
}
createDept()
const app = express()

app.get('/', (req, res) =>{
  res.send('Hello')
})

app.listen(port, ()=> {
  print(`Server is running on port ${port}`)
})
