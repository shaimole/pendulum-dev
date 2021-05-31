const Joi = require('joi')
const db = require('./connection')

const tokenSchema = Joi.object().keys({
  username: Joi.string().alphanum().required(),
  token: Joi.string().required()
})
const tokens = db.get('tokens')

function validate (payload, callback) {
  const result = Joi.validate(payload, tokenSchema)
  if (result.error) {
    return Promise.reject(result.error)
  }
  if (tokens.find(payload)) {
    return callback()
  } else {
    return false
  }
}

module.exports = {
  validate
}
