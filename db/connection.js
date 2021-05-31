const monk = require('monk')
const connectionstring = 'localhost:27017'
const db = monk(connectionstring)
db.then(() => console.log('connected to mongodb'))
module.exports = db
