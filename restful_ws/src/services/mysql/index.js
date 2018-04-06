
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYQSL_HOST,
  user: process.env.MYQSL_USER,
  password: process.env.MYQSL_PASSWORD,
  database: process.env.MYQSL_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })
const userModule = require('./users')({ connection, errorHandler })
const authModule = require('./auth')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule,
  users: () => userModule,
  auth: () => authModule
}
