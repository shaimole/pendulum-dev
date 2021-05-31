// const Joi = require('joi')
const db = require('./connection')

// const schema = Joi.object().keys({
//   username: Joi.string().alphanum().required(),
//   subject: Joi.string().required(),
//   message: Joi.string().max(500).required()
// })

const messages = db.get('messages')

function getAll () {
  return messages.find()
}

function create (message) {
  // if (!message.username) message.username = 'Anonymous'
  return { jo: 'jo' }
  // const result = Joi.validate(message, schema)
  // if (result.error == null) {
  //   messages.created = new Date()
  //   return messages.insert(message)
  // } else {
  //   return Promise.reject(result.error)
  // }
}

module.exports = {
  create,
  getAll
}
