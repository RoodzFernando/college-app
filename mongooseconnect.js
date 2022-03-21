require('dotenv').config()
const { connect, connection } = require('mongoose')

const databaseURL = process.env.URL
connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = connection
db.on('error', console.error.bind('MongoDB connection error!'))

