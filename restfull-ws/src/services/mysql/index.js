
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root132',
  database: 'restful_ws'
})

const categories = require('../mysql/categories')({ connection })

module.exports = {
  categories: () => categories
}
