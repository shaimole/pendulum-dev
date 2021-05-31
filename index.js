const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const user = require('./db/user')
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

app.post('/user/register', (req, res) => {
  console.log('hello')
  user.register(req)
  .then(response => {
      res.json(response)
    })
    .catch(error => {
      console.log(error)
      res.status(error.status || 400).json(error.message)
    })
})

app.post('/user/checkusername', (req, res) => {
  user.checkUsername(req).then(message => res.json(message))
})

app.post('/user/login', (req, res) => {
  user
    .login(req)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.status(error.status || 403).json(error.message)
    })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
