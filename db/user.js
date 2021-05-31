const Joi = require('joi')
const db = require('./connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

const registerSchema = Joi.object({
  email: Joi.string()
    .required(),
  username: Joi.string()
    .alphanum()
    .required(),
  password: Joi.string()
    .max(500)
    .required(),
  terms: Joi.boolean()
    .required()
})

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  loginId: Joi.string()
    .required()
    .error(() => new Error('Please login using the offical website.'))
})
const users = db.get('users')
const tokens = db.get('tokens')

async function register ({body}) {
  const result = registerSchema.validate(body) 
  if (result.error) {
    return Promise.reject(result.error)
  }
  console.log(body)
  body.password =  await bcrypt.hash(body.password, saltRounds)
  users.insert(body)
  return generateToken(body.username)
}

async function login (payload) {
  const result = loginSchema.validate(payload.body)
  if (result.error) {
    return Promise.reject(new Error(result.error))
  }
  const user = users.find({ username: payload.body.username })
  return validate(user, payload.body.password)
}

function validate (user, pw) {
  if (!user.password) {
    return Promise.reject(new Error('Invalid credentials.'))
  }
  if (bcrypt.compare(pw, user.password)) {
    return generateToken(user.username)
  }
  return { status: 400, error: 'No Auth' }
}

function generateToken (username) {
  const token = createToken()
  tokens.insert({ token: token, username: username })
  return { staus: 200, token: token }
}
var rand = function () {
  return Math.random()
    .toString(36)
    .substr(2)
}

function createToken () {
  return rand() + rand()
}

async function checkUsername (payload) {
  const user = users.find({ username: payload.body.username })
  if (user.username) {
    return { code: 409, message: 'Username is taken' }
  }
  return { code: 200, message: '' }
}

module.exports = {
  register,
  login,
  checkUsername
}
