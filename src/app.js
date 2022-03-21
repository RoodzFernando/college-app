const express = require('express')
require('../mongooseconnect')
const port = process.env.PORT || 3000
const print = require('../utils')
const userRouter = require('../routes/userRoutes')

const app = express()
app.use(express.json())
app.use('/api/users', userRouter)

app.get('/', (req, res) =>{
  res.send('Hello')
})

app.listen(port, ()=> {
  print(`Server is running on port ${port}`)
})
